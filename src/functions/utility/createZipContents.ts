/** @format */

import JSZip from "jszip"
import { ICustomMite } from "../../interfaces/miteTypeInterfaces/ICustomMite"
import { IManikin } from "../../interfaces/objectInterfaces/IManikin"
import { IMemory } from "../../interfaces/objectInterfaces/IMemory"
import { traefikManikin } from "../../mobparts/manikins/traefik"
import { mobName } from "../../mobparts/memories/mobName"
import { insertMemoryValues } from "./insertMemoryValues"

//  createZipContents.ts
//  MEGADocker
//  creates the contents of a docker swarm zip file
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

  /**
   * makes docker-compose .zip contents
   */
export const createZipContents = async (zip: JSZip, zipManikins: IManikin[], zipMemories: IMemory[], customMites: ICustomMite[], ymlString: string): Promise<string> => {
  const traefikIndex: number = zipManikins.indexOf(traefikManikin)
  const mobNameIndex: number = zipManikins[traefikIndex].memories.indexOf(mobName)

    const makeZip = async (zip: JSZip): Promise<string> => {
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

    return makeZip(zip)
  }