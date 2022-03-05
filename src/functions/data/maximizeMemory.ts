/** @format */

//  maximizeMemory.ts
//  MEGADocker
//  a function that converts an IMiniMemory to an IMemory
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { IMiniMemory } from '../../interfaces/objectInterfaces/IMiniMemory'
import { workingManikins } from '../../globals/workingManikins'
//import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'

/**
 * creates an IMemory from an IMiniMemory
 * @param miniMemory the IMiniMemory that was saved
 * @return IMemory
 */
export const maximizeMemory: Function = (miniMemory: IMiniMemory): IMemory => {
  let newMemory: IMemory = {
    memoryName: `Name Placeholder`,
    memoryType: `NormalMemory`,
    memoryValue: `Value Placeholder`,
    memoryMarker: `[[MEMORYPLACEHOLDER]]`,
    isReady: false,
    shouldAutocomplete: false,
    tooltip: `This is a stub memory.`,
    validator: (): boolean => {
      return false
    },
    valueType: `text`,
    memoryIndex: 99999
  }
  let foundMemory: IMemory | undefined = newMemory
  // find the manikin in workingManikins that has a memory with a matching miniMemory.memoryName
  const foundManikin: IManikin | undefined = workingManikins.find((workingManikin: IManikin): boolean => {
    // find the memory from that manikin that has a matching memoryName
    foundMemory = workingManikin.memories.find((memory: IMemory): boolean => {
      return memory.memoryName === miniMemory.memoryName
    })
    return foundMemory !== undefined
  })
  // if foundManikin is undefined throw an error
  if (foundManikin === undefined) {
    throw new Error(`Could not find a Manikin with a matching memoryName: ${miniMemory.memoryName}`)
  } else {
    // if foundMemory is undefined throw an error
    if (foundManikin.memories === undefined) {
      throw new Error(`Could not find a Memory with a matching memoryName: ${miniMemory.memoryName}`)
    } else {
      // populate the memoryValue of newMemory with the miniMemory.memoryValue
      newMemory = {
        memoryName: foundMemory.memoryName,
        memoryType: foundMemory.memoryType,
        memoryValue: miniMemory.memoryValue,
        memoryMarker: foundMemory.memoryMarker,
        isReady: foundMemory.validator(miniMemory.memoryValue),
        shouldAutocomplete: foundMemory.shouldAutocomplete,
        tooltip: foundMemory.tooltip,
        validator: foundMemory.validator,
        valueType: foundMemory.valueType,
        memoryIndex: foundMemory.memoryIndex
      }
    }
  }
  return newMemory
}
