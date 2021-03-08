/** @format */

import JSZip from 'jszip'
import fileSaver from 'file-saver'
import { IMemory } from '../../interfaces/IMemory'
import { IManikin } from '../../interfaces/IManikin'
import { IMite } from '../../interfaces/IMite'
import { ICustomMite } from '../../interfaces/ICustomMite'
import { IZipDockerCompose } from '../../interfaces/IZipDockerCompose'
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString'
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString'
import { mobNetworksSectionString } from '../../mobparts/mites/headers/mobNetworksSectionString'
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString'
import { traefikManikin } from '../../mobparts/manikins/traefik'
import { mobName } from '../../mobparts/memories/mobName'
import { ldapBootstrapMegaDockerDotLdifMite } from '../../mobparts/mites/custom/ldapBootstrapMegaDockerDotLdifMite'
import { primaryDomain } from '../../mobparts/memories/primaryDomain'

/**
 * makes .zip file for docker-compose
 */
export const zipDockerSwarm = (zipCompose: IZipDockerCompose): JSZip => {
  let zip: JSZip = JSZip()

  let zipMemories: IMemory[] = [...zipCompose.memories]
  let zipManikins: IManikin[] = [...zipCompose.manikins]

  const traefikIndex: number = zipManikins.indexOf(traefikManikin)
  const mobNameIndex: number = zipManikins[traefikIndex].memories.indexOf(mobName)
  const domainIndex: number = zipManikins[traefikIndex].memories.indexOf(primaryDomain)

  const rawMites: IMite[] = zipManikins.flatMap((eachManikin: IManikin) => eachManikin.mites.map((eachMite: IMite) => eachMite))

  const mites: IMite[] = Array.from(new Set(rawMites))

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

  const ldifIndex: number = customMites.indexOf(ldapBootstrapMegaDockerDotLdifMite)

  /**
   * adds dc values to bootstrap ldif
   */
  const populateLdifDCs: Function = (): string => {
    const fullDomain: string = zipCompose.manikins[traefikIndex].memories[domainIndex].value
    const tld: string = fullDomain.split(`.`)[1]
    const domain: string = fullDomain.split(`.`)[0]
    const workingLdif = ldapBootstrapMegaDockerDotLdifMite.miteFile.contents.split(`[[LDAPDOMAINASDCS]]`).join(`dc=${domain},dc=${tld}`)

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
      let tempYml = workingYml.split(eachMemory.memoryMarker).join(eachMemory.value)
      workingYml = tempYml
    })

    const finalYml = workingYml
    return finalYml
  }

  customMites.map((eachCustomMite: ICustomMite) => {
    const newFileContents = zipMemories.forEach((eachMemory: IMemory) => {
      const workingFileContents = eachCustomMite.miteFile.contents.split(eachMemory.memoryMarker).join(eachMemory.value)
      eachCustomMite.miteFile.contents = workingFileContents
    })
    return newFileContents
  })

  const ymlOutputArray: string[] = [mobFileHeaderString, ...serviceMites, servicesFooterSectionString, mobNetworksSectionString, ...networkMites, mobNetworkFooterSectionString]

  let ymlString: string = ymlOutputArray.join(``)

  /**
   * makes docker-compose.yml file
   */
  const createZipContents = async (): Promise<string> => {
    const makeZip = async (): Promise<string> => {
      try {
        zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.file(`${zipManikins[traefikIndex].memories[mobNameIndex].value}.yml`, `${insertMemoryValues(ymlString, zipMemories)}`)
        customMites.forEach((eachCustomMite) => {
          zip.file(
            `${zipManikins[traefikIndex].memories[mobNameIndex].value}/${eachCustomMite.miteFile.path}/${eachCustomMite.miteFile.name}.${eachCustomMite.miteFile.extension}`,
            `${eachCustomMite.miteFile.contents}`,
            { unixPermissions: `${eachCustomMite.miteFile.permissions}` }
          )
        })
        const output = await zip.generateAsync({
          type: `binarystring`,
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
    zipManikins.map((eachManikin: IManikin) => {
      const subs = eachManikin.subfolders
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.folder(`logs`)!.folder(eachManikin.folder)
      for (let eachSubfolder in subs) {
        zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.folder(eachManikin.folder)!.folder(subs[eachSubfolder])
      }

      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.file(
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
docker stack deploy -c ${zipManikins[traefikIndex].memories[mobNameIndex].value}.yml ${zipManikins[traefikIndex].memories[mobNameIndex].value}
`,
        { unixPermissions: `755` }
      )
      // makes stopstack.sh script
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.file(
        `stopstack.sh`,
        `#!/bin/sh
        docker stack rm ${zipManikins[traefikIndex].memories[mobNameIndex].value}
        `,
        { unixPermissions: `755` }
      )
      /*
      // makes setupdns.sh script
      zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.file(
        `setupdns.sh`,
        `#!/bin/sh

## begin pseudocode
  ## before shell script
            # check if dynamicDNS manikin is selected (dynamicdns check)
              # this requires:
                # create dynamicDNS manikin
            # if dynamicdns check, call typescript function to generate updatedynamicdns.sh script in zip
              # this requires:
                # write function
            # get value from primaryDomain Memory for use as "zoneid" in script
            # get all selected Manikins' hostnames for DNS
              # this requires:
                # changing the Manikin interface to include a property "host: string"
                # updating all Manikins with property "host: string"
                # updating newManikin script to include "host: string"
                # changing the serviceMite strings traefik labels to use "manikin.host"
  ## during shell script
            # curl check to get "zoneid" by domain name (zoneexistence check)
              # if !zoneexistence check, error
              # curl check for host "megadockerswarm" in zone "zoneid"
                # check response for type A
                # curl add type A record for megadockerswarm if selected and doesn't exist
              # for loop through selected Manikins
                # curl check if record already exists (hostexists check)
                # if hostexists
                  # check response for type CNAME (hosttype check)
                    # if hosttype is not CNAME, error
                    # if hosttype is CNAME, update CNAME to point to megadockerswarm
                # if !hostexists
                  # curl add CNAME records pointing to megadockerswarm

## end pseudocode

        `,
        { unixPermissions: `755` }
      )
      */
    })
  }

  createZipContents()
  makeFoldersAndConvenienceScripts()

  zip.folder(`${zipManikins[traefikIndex].memories[mobNameIndex].value}`)!.file(`traefik/acme.json`, ``, { unixPermissions: `600` })
  zip
    .generateAsync({
      compression: `DEFLATE`,
      compressionOptions: { level: 9 },
      platform: `UNIX`,
      type: `blob`,
    })
    .then(function (content) {
      fileSaver.saveAs(content, `${zipManikins[traefikIndex].memories[mobNameIndex].value}.zip`)
    })

  return zip
}
