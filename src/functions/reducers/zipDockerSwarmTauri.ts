/** @format */

//  zipDockerSwarmTauri.ts
//  MEGADocker
//  a function that creates and downloads a zip file containing the user's Docker Swarm in Tauri
//  Created by George Georgulas IV on 2/04/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { cloudflareAPIToken } from '../../mobparts/memories/cloudflareAPIToken'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMite } from '../../interfaces/objectInterfaces/IMite'
import { ILDIFMite } from '../../interfaces/miteTypeInterfaces/ILDIFMite'
import { ICustomMite } from '../../interfaces/miteTypeInterfaces/ICustomMite'
import { ITraefikedServiceMite } from '../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'
import { IZipDockerCompose } from '../../interfaces/stateManagement/IZipDockerCompose'
import JSZip from 'jszip'
import { ldapBootstrapMegaDockerDotLdifMite } from '../../mobparts/mites/custom/ldapBootstrapMegaDockerDotLdifMite'
import { primaryDomain } from '../../mobparts/memories/primaryDomain'
import { mobFileHeaderSectionString } from '../../mobparts/mites/headers/mobFileHeaderSectionString'
import { mobServicesFooterSectionString } from '../../mobparts/mites/headers/mobServicesFooterSectionString'
import { mobName } from '../../mobparts/memories/mobName'
import { mobNetworkHeaderSectionString } from '../../mobparts/mites/headers/mobNetworkHeaderSectionString'
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString'
import { mobSecretsHeaderSectionString } from '../../mobparts/mites/headers/mobSecretsHeaderSectionString'
import { mobSecretsFooterSectionString } from '../../mobparts/mites/headers/mobSecretsFooterSectionString'
import { traefikManikin } from '../../mobparts/manikins/traefik'
import { writeBinaryFile } from '@tauri-apps/api/fs'

/**
 * makes .zip file for docker-compose in Tauri desktop application
 * @param zipCompose the IZipDockerCompose object
 */

export const zipDockerSwarmTauri = (zipCompose: IZipDockerCompose): void => {
  let zip: JSZip = JSZip()

  let zipManikins: IManikin[] = [...zipCompose.manikins]
  let zipMemories: IMemory[] = [...zipCompose.memories]

  const traefikIndex: number = zipManikins.indexOf(traefikManikin)
  const mobNameIndex: number = zipManikins[traefikIndex].memories.indexOf(mobName)
  const domainIndex: number = zipManikins[traefikIndex].memories.indexOf(primaryDomain)
  const cloudflareAPITokenIndex: number = zipManikins[traefikIndex].memories.indexOf(cloudflareAPIToken)
  const cloudflareAPITokenValue: string = zipManikins[traefikIndex].memories[cloudflareAPITokenIndex].memoryValue.toString().split(',').join('" "')

  const mites: IMite[] = Array.from(new Set(zipManikins.flatMap((eachManikin: IManikin) => eachManikin.mites.map((eachMite: IMite) => eachMite))))

  const serviceMites: string[] = mites
    .filter((eachMite: IMite) => eachMite.type === `DockerSwarmService`)
    .sort((mite1, mite2): number => {
      if (mite1.miteIndex > mite2.miteIndex) {
        return 1
      }
      if (mite1.miteIndex < mite2.miteIndex) {
        return -1
      }
      return 0
    })
    .map((eachMite: IMite) => eachMite.miteString)

  const traefikMites: ITraefikedServiceMite[] = mites.filter((eachMite: IMite) => eachMite.type === `DockerSwarmService`) as ITraefikedServiceMite[]

  const cloudflareHosts: string = traefikMites
    .map((eachTraefikedMite: ITraefikedServiceMite) => eachTraefikedMite.webInterfaceHostnames)
    .flat()
    .join()
    .split(',')
    .join('" "')

  const networkMites: string[] = mites
    .filter((eachMite: IMite) => eachMite.type === `DockerSwarmNetwork`)
    .sort((mite1, mite2): number => {
      if (mite1.miteIndex > mite2.miteIndex) {
        return 1
      }
      if (mite1.miteIndex < mite2.miteIndex) {
        return -1
      }
      return 0
    })
    .map((eachMite: IMite) => eachMite.miteString)

  const customs: IMite[] = mites.filter((eachMite: IMite) => eachMite.type === `Custom`)

  const customMites: ICustomMite[] = customs.map((mite: IMite) => mite as ICustomMite)

  const ldifs: ILDIFMite[] = mites.filter((eachMite: IMite) => eachMite.type === `LDIF`) as ILDIFMite[]

  const ldifAdditions: string = ldifs.map((mite: IMite) => mite.miteString).join(``)

  const ldifIndex: number = customMites.indexOf(ldapBootstrapMegaDockerDotLdifMite)

  /**
   * adds dc values to bootstrap ldif
   */
  const populateLdifDCs: Function = (): string => {
    const fullDomain: string = zipCompose.manikins[traefikIndex].memories[domainIndex].memoryValue
    const tld: string = fullDomain.split(`.`)[1]
    const domain: string = fullDomain.split(`.`)[0]
    const ldifContents: string = ldapBootstrapMegaDockerDotLdifMite.miteFile.contents + ldifAdditions
    const workingLdif = ldifContents.split(`[[LDAPDOMAINASDCS]]`).join(`dc=${domain},dc=${tld}`)

    return workingLdif
  }
  customMites[ldifIndex].miteFile.contents = populateLdifDCs()

  /**
   * updates yml with variables from memories
   * @param ymlInput the initial string to change
   * @param memories the memories to apply
   */
  const insertMemoryValues: Function = (ymlInput: string, memories: IMemory[]): string => {
    let workingYml: string = ymlInput

    memories.forEach((eachMemory: IMemory) => {
      let tempYml = workingYml.split(eachMemory.memoryMarker).join(eachMemory.memoryValue)
      workingYml = tempYml
    })

    const finalYml = workingYml
    return finalYml
  }

  customMites.map((eachCustomMite: ICustomMite) => {
    const newFileContents = zipMemories.forEach((eachMemory: IMemory) => {
      const workingFileContents = eachCustomMite.miteFile.contents.split(eachMemory.memoryMarker).join(eachMemory.memoryValue)
      eachCustomMite.miteFile.contents = workingFileContents
    })
    return newFileContents
  })

  const ymlOutputArray: string[] = [
    mobFileHeaderSectionString.miteString,
    ...serviceMites,
    mobServicesFooterSectionString.miteString,
    mobNetworkHeaderSectionString.miteString,
    ...networkMites,
    mobNetworkFooterSectionString.miteString,
    mobSecretsHeaderSectionString.miteString,
    mobSecretsFooterSectionString.miteString
  ]

  let ymlString: string = ymlOutputArray.join(``)

  /**
   * makes docker-compose.yml file
   */
  const createZipContents = async (): Promise<string> => {
    const makeZip = async (): Promise<string> => {
      try {
        zip
          .folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!
          .file(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}.yml`, `${insertMemoryValues(ymlString, zipMemories)}`)
        customMites.forEach((eachCustomMite) => {
          zip.file(
            `${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}/${eachCustomMite.miteFile.path}/${eachCustomMite.miteFile.name}.${eachCustomMite.miteFile.extension}`,
            `${eachCustomMite.miteFile.contents}`,
            { unixPermissions: `${eachCustomMite.miteFile.permissions}` }
          )
        })
        const output = await zip.generateAsync({
          type: `binarystring`
        })

        return output
      } catch {
        return `zip failed`
      }
    }

    return makeZip()
  }

  /**
   * generates manikin folders and subfolders
   */
  const makeFoldersAndConvenienceScripts: VoidFunction = (): void => {
    // eslint-disable-next-line array-callback-return
    zipManikins.map((eachManikin: IManikin) => {
      const subs = eachManikin.subfolders
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.folder(`logs`)!.folder(eachManikin.folder)
      for (let eachSubfolder in subs) {
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
  HOSTS=("${cloudflareHosts}")
  echo "Setting Cloudflare API Token...";
  CLOUDFLAREAPITOKEN="${cloudflareAPITokenValue}";
  echo "Getting our external IP address...";
  EXTERNALIPADDRESS=$(curl -s https://api.ipify.org);
  echo "Setting Zone ID for domain ${zipManikins[traefikIndex].memories[domainIndex].memoryValue}...";
  ZONEIDRESULT=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones?name=${zipManikins[traefikIndex].memories[domainIndex].memoryValue}" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" -H "Content-Type: application/json");
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
  DOMAINHOSTSRESULT=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records?type=A&name=megadockerswarm.${zipManikins[traefikIndex].memories[domainIndex].memoryValue}" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" -H "Content-Type: application/json");
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
    HOSTCNAMEEXISTSRESULTS=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/\${ZONEID}/dns_records?type=CNAME&name=\${EACHHOST}.${zipManikins[traefikIndex].memories[domainIndex].memoryValue}&match=all" -H "Authorization: Bearer \${CLOUDFLAREAPITOKEN}" -H "Content-Type:application/json");
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

  createZipContents()
  makeFoldersAndConvenienceScripts()

  zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}`)!.file(`traefik/acme.json`, ``, { unixPermissions: `600` })
  zip
    .generateAsync({
      compression: `DEFLATE`,
      compressionOptions: { level: 9 },
      platform: `UNIX`,
      type: `blob`
    })
    .then(async function (content: Blob) {
      const zipContents: Uint8Array = new Uint8Array(await content.arrayBuffer())
      await writeBinaryFile({ contents: zipContents, path: `${zipManikins[traefikIndex].memories[mobNameIndex].memoryValue}.zip` }, { dir: 8 /* Downloads directory */ })
    })
}
