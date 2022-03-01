/** @format */

//  maximizeManikin.ts
//  MEGADocker
//  a function that converts an IMiniManikin to an IManikin
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { workingManikins } from '../../globals/workingManikins'
import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { IMiniMemory } from '../../interfaces/objectInterfaces/IMiniMemory'
import { maximizeMemory } from './maximizeMemory'

/**
 * creates an IManikin from an IMiniManikin
 */
export const maximizeManikin: Function = (miniManikin: IMiniManikin): IManikin => {
  // search workingManikins for a manikin with a matching manikin.name
  const foundManikin: IManikin | undefined = workingManikins.find((workingManikin: IManikin): boolean => {
    return workingManikin.manikinName === miniManikin.manikinName
  })
  // if foundManikin is undefined throw an error
  if (foundManikin === undefined) {
    throw new Error(`${miniManikin.manikinName} does not exist in current version ${currentMegaDockerVersion} of MEGADocker`)
  } else {
    const maximizedManikin: IManikin = {
      ...foundManikin,
      manikinName: miniManikin.manikinName,
      isSelected: miniManikin.isSelected,
      memories: miniManikin.miniMemories.map((miniMemory: IMiniMemory): IMemory => {
        return maximizeMemory(miniMemory)
      })
    }
    return maximizedManikin
  }
}
