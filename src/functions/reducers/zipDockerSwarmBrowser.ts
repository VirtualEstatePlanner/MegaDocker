/** @format */

//  zipDockerSwarmBrowser.ts
//  MEGADocker
//  a function that saves a zip file containing the user's Docker Swarm in the browser
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

// external libraries
import fileSaver from 'file-saver'
import JSZip from 'jszip'

// interfaces
import { ICustomMite } from '../../interfaces/miteTypeInterfaces/ICustomMite'
import { ILDIFMite } from '../../interfaces/miteTypeInterfaces/ILDIFMite'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { IMite } from '../../interfaces/objectInterfaces/IMite'
import { ITraefikedServiceMite } from '../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'
import { IZipValues } from '../../interfaces/objectInterfaces/IZipValues'

// functions
import { createZipContents } from '../utility/createZipContents'
import { getCloudflareHosts } from '../utility/getCloudflareHosts'
import { sortNetworkMiteStrings } from '../utility/sortNetworkMiteStrings'
import { sortServiceMiteStrings } from '../utility/sortServiceMiteStrings'

// manikins
import { traefikManikin } from '../../mobparts/manikins/traefik'

// memories
import { cloudflareAPIToken } from '../../mobparts/memories/cloudflareAPIToken'
import { mobName } from '../../mobparts/memories/mobName'
import { primaryDomain } from '../../mobparts/memories/primaryDomain'

// mites
import { ldapBootstrapMegaDockerDotLdifMite } from '../../mobparts/mites/custom/ldapBootstrapMegaDockerDotLdifMite'
import { mobFileHeaderSectionString } from '../../mobparts/mites/headers/mobFileHeaderSectionString'
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString'
import { mobNetworkHeaderSectionString } from '../../mobparts/mites/headers/mobNetworkHeaderSectionString'
import { mobSecretsHeaderSectionString } from '../../mobparts/mites/headers/mobSecretsHeaderSectionString'
import { mobSecretsFooterSectionString } from '../../mobparts/mites/headers/mobSecretsFooterSectionString'
import { mobServicesFooterSectionString } from '../../mobparts/mites/headers/mobServicesFooterSectionString'
import { populateLdifDCs } from './populateLdifDCs'

/**
 * makes .zip file for docker-compose in web browser
 * @param zipCompose the IZipDockerCompose object
 */
export const zipDockerSwarmBrowser: (zipCompose: IZipValues) => void = (zipCompose: IZipValues): void => {
  const zip: JSZip = JSZip()

  const zipManikins: IManikin[] = zipCompose.manikins
  const zipMemories: IMemory[] = zipCompose.memories

  const traefikIndex: number = zipManikins.indexOf(traefikManikin)
  const mobNameIndex: number = zipManikins[traefikIndex].memories.indexOf(mobName)
  const domainIndex: number = zipManikins[traefikIndex].memories.indexOf(primaryDomain)
  const cloudflareAPITokenIndex: number = zipManikins[traefikIndex].memories.indexOf(cloudflareAPIToken)
  const cloudflareAPITokenValue: string = zipManikins[traefikIndex].memories[cloudflareAPITokenIndex].memoryValue.toString().split(',').join('" "')

  const mites: IMite[] = Array.from(new Set(zipManikins.flatMap((eachManikin: IManikin) => eachManikin.mites.map((eachMite: IMite) => eachMite))))

  const traefikMites: ITraefikedServiceMite[] = mites.filter((eachMite: IMite) => eachMite.type === `DockerSwarmService`) as ITraefikedServiceMite[]

  const customMites: ICustomMite[] = mites.filter((eachMite: IMite) => eachMite.type === `Custom`).map((mite: IMite) => mite as ICustomMite)

  const ldifMites: ILDIFMite[] = mites.filter((eachMite: IMite) => eachMite.type === `LDIF`) as ILDIFMite[]

  const ldifAdditions: string = ldifMites.map((mite: IMite) => mite.miteString).join(``)

  const ldifIndex: number = customMites.indexOf(ldapBootstrapMegaDockerDotLdifMite)

  customMites[ldifIndex].miteFile.contents = populateLdifDCs(zipManikins, ldifAdditions)

  customMites.map((eachCustomMite: ICustomMite) => {
    const newFileContents = zipMemories.forEach((eachMemory: IMemory) => {
      const workingFileContents = eachCustomMite.miteFile.contents.split(eachMemory.memoryMarker).join(eachMemory.memoryValue)
      eachCustomMite.miteFile.contents = workingFileContents
    })
    return newFileContents
  })

  const ymlFileContents: string = [
    mobFileHeaderSectionString.miteString,
    sortServiceMiteStrings(mites),
    mobServicesFooterSectionString.miteString,
    mobNetworkHeaderSectionString.miteString,
    sortNetworkMiteStrings(mites),
    mobNetworkFooterSectionString.miteString,
    mobSecretsHeaderSectionString.miteString,
    mobSecretsFooterSectionString.miteString
  ].join(``)

  /**
   * generates manikin folders and subfolders
   */
  const makeFoldersAndConvenienceScripts: VoidFunction = (): void => {
    // eslint-disable-next-line array-callback-return
    zipManikins.map((eachManikin: IManikin) => {
      const subs = eachManikin.subfolders
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.folder(`logs`)!.folder(eachManikin.folder)
      for (const eachSubfolder in subs) {
        zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.folder(eachManikin.folder)!.folder(subs[eachSubfolder])
      }

      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.file(
        `launchstack.sh`,
        `#!/bin/sh
export HOSTUSERID=$(id -u)
export HOSTUSERGID=$(id -g)
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  export HOSTTIMEZONE=$(wget -q -O - https://ipapi.co/timezone)
elif [[ "$OSTYPE" == "darwin"* ]]; then
  export HOSTTIMEZONE=$(curl -s https://ipapi.co/timezone)
elif [[ "$OSTYPE" == "win32" ]]; then
  export HOSTTIMEZONE=$(curl https://ipapi.co/timezone)
else
  echo "Setting default timezone as 'America/New_York' because we couldn't determine OS type"
  export HOSTTIMEZONE=America/New_York
fi

echo
echo "We seem to be running on $OSTYPE"
echo "         with user id of $HOSTUSERID"
echo "    and user group id of $HOSTUSERGID"
echo "         in the timezone $HOSTTIMEZONE."
echo
docker stack deploy -c ${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}.yml ${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}
`,
        { unixPermissions: `755` }
      )

      // makes stopstack.sh script
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.file(
        `stopstack.sh`,
        `#!/bin/sh
docker stack rm ${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}
`,
        { unixPermissions: `755` }
      )

      // makes setupdns.sh script
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.file(
        `setupdns.sh`,
        `#!/bin/sh
ISJQINSTALLED=$(which jq)
if [ "\${ISJQINSTALLED}" = 'jq not found' ]; then
  echo;
  echo "Error: exiting with status 1 (Couldn't find jq binary).  You must install jq to use this script.";
  echo "Try 'sudo apt install jq' on Debian/Ubuntu/Mint.";
  echo "Try 'sudo yum install jq' on CentOS/Fedora/RedHat";
  echo "Try 'sudo apk install jq' on Alpine";
  echo "Try 'brew install jq' on macOS";
  echo;
    exit 1;
  else
  echo "Found jq binary at \${ISJQINSTALLED}"...;
fi;
  echo "Setting script variables...";
  echo "Setting domain name...";
  DOMAIN="${zipManikins[traefikIndex].memories[domainIndex].memoryValue}";
  echo "Setting CNAME target...";
  CNAMETARGET="megadockerswarm.${zipManikins[traefikIndex].memories[domainIndex].memoryValue}";
  echo "Setting hostnames...";
  HOSTS=("${getCloudflareHosts(traefikMites)}");
  echo "Setting Cloudflare API Token...";
  CLOUDFLAREAPITOKEN="${cloudflareAPITokenValue}";
  echo "Getting our external IP address...";
  EXTERNALIPADDRESS=$(curl -s https://api.ipify.org);
  echo "Setting Zone ID for domain ${zipManikins[traefikIndex].memories[domainIndex].memoryValue}...";
  ZONEIDRESULT=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones?name=${
    zipManikins[traefikIndex].memories[domainIndex].memoryValue
  }" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" -H "Content-Type: application/json");
  ZONEIDSUCCEEDED=$(echo "\${ZONEIDRESULT}" | jq | grep "success");
  if [ "\${ZONEIDSUCCEEDED}" = '  "success": true,' ]; then
    ZONEID=$(echo "\${ZONEIDRESULT}" | jq -r | grep "id" | sed 1q | sed 's/^.............//' | sed 's/..$//');
  else
    echo;
    echo "Error: exiting with status 2 (Couldn't determine Cloudflare Zone for ${zipManikins[traefikIndex].memories[domainIndex].memoryValue})";
    echo "Please confirm that this domain is managed by your Cloudflare account.";
    echo "Please confirm that your Cloudflare API Token has 'Zone: Read' and 'DNS: Edit' privileges for ${zipManikins[traefikIndex].memories[domainIndex].memoryValue}.";
    echo;
    echo "https://dash.cloudflare.com";
    echo;
    exit 2;
  fi;
  echo "Getting Host ID for \${CNAMETARGET} A record...";
  DOMAINHOSTSRESULT=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records?type=A&name=megadockerswarm.${
    zipManikins[traefikIndex].memories[domainIndex].memoryValue
  }" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" -H "Content-Type: application/json");
  DOMAINHOSTSUCCEEDED=$(echo "\${DOMAINHOSTSRESULT}" | jq | grep success);
  if [ "\${DOMAINHOSTSUCCEEDED}" = '  "success": true,' ]; then
    DOMAINHOSTID=$(echo "\${DOMAINHOSTSRESULT}" | jq -r | grep id | sed 1q | sed 's/^.............//' | sed 's/..$//');
    if [ "\${DOMAINHOSTID}" != ""  ]; then
      DOMAINHOSTIPADDRESS=$(echo "\${DOMAINHOSTSRESULT}" | jq -r | grep content| sed 's/^..................//' | sed 's/..$//');
      if [ "\${DOMAINHOSTIPADDRESS}" == "\${EXTERNALIPADDRESS}" ]; then
        echo "The A record for \${CNAMETARGET} appears to be configured correctly.";
      else
        echo "Updating A record for \${CNAMETARGET} to point to \${EXTERNALIPADDRESS}...";
      DATAFLAG="{\\"type\\":\\"A\\",\\"name\\":\\"megadockerswarm\\",\\"content\\":\\"\${EXTERNALIPADDRESS}\\",\\"ttl\\":1,\\"priority\\":10,\\"proxied\\":false}";
      UPDATEMEGADOCKERSWARMRECORDRESULT=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records/\${DOMAINHOSTID}" -H "Content-Type:application/json" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" --data \${DATAFLAG});
      fi;
    fi;
    if [ "\${DOMAINHOSTID}" == "" ]; then
      echo "Creating an A record for megadockerswarm.${zipManikins[traefikIndex].memories[domainIndex].memoryValue}";
      CREATEMEGADOCKERSWARMRECORDRESULT=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records" -H "Content-Type:application/json" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" --data '{"type":"A","name":"megadockerswarm","content":"'"\${EXTERNALIPADDRESS}"'","ttl":1,"proxied":false}');
      MEGADOCKERSWARMHOSTID=$(echo "\${CREATEMEGADOCKERSWARMRECORDRESULT}" | jq | grep id | sed 1q | sed 's/^..//' | sed 's/..$//');
    fi;
  fi;
  for EACHHOST in \${HOSTS[@]}; do
    DATAFLAG="{\\"type\\":\\"CNAME\\",\\"name\\":\\"\${EACHHOST}\\",\\"content\\":\\"\${CNAMETARGET}\\",\\"ttl\\":1,\\"priority\\":10,\\"proxied\\":false}"
    HOSTCNAMEEXISTSRESULTS=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records?type=CNAME&name=\${EACHHOST}.${
      zipManikins[traefikIndex].memories[domainIndex].memoryValue
    }&match=all" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" -H "Content-Type:application/json");
    HOSTCNAMEID=$(echo \${HOSTCNAMEEXISTSRESULTS} | jq | grep id | sed 1q | sed 's/^.............//' | sed 's/..$//');
    if [ "\${HOSTCNAMEID}" != "" ]; then
      HOSTCONTENTRESULTS=$(echo \${HOSTCNAMEEXISTSRESULTS} | jq | grep content | sed 's/^..................//' | sed 's/..$//');
      if [ "\${HOSTCONTENTRESULTS}" = "\${CNAMETARGET}" ]; then
        echo "\${EACHHOST} appears to be configured already.";
      elif [ "\${HOSTCONTENTRESULTS}" != "\${CNAMETARGET}" ]; then
        echo "Updating \${EACHHOST}.${zipManikins[traefikIndex].memories[domainIndex].memoryValue} to point to \${CNAMETARGET}..."
        UPDATEHOSTRESULT=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records/\${HOSTCNAMEID}" -H "Content-Type:application/json" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" --data \${DATAFLAG});
      fi;
    fi;
    if [ "\${HOSTCNAMEID}" == "" ]; then
      echo "Creating \${EACHHOST} CNAME record..."
      CREATEHOSTRESULT=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records" -H "Content-Type:application/json" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" --data \${DATAFLAG});
    fi;
  done;      
  echo "Your MEGADocker mob's DNS is probably configured correctly.";
  echo "Run './launchstack.sh' and then visit any of the following addresses:";
  for EACHHOST in \${HOSTS[@]}; do
    echo "https://$EACHHOST.${zipManikins[traefikIndex].memories[domainIndex].memoryValue}";
  done;
`,
        { unixPermissions: `755` }
      )
    })
  }

  createZipContents(zip, zipManikins, zipMemories, customMites, ymlFileContents)
  makeFoldersAndConvenienceScripts()

  zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.file(`traefik/acme.json`, ``, { unixPermissions: `600` })
  zip
    .generateAsync({
      compression: `DEFLATE`,
      compressionOptions: { level: 9 },
      platform: `UNIX`,
      type: `blob`
    })
    .then(function (content: Blob) {
      fileSaver.saveAs(content, `${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}.zip`)
    })
}
