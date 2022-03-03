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
    memoryMarker: `[[AUTHELIAMARIADBPASSWORD]]`,
    isReady: false,
    shouldAutocomplete: false,
    tooltip: `This is a stub memory.`,
    validator: (): boolean => {
      return false
    },
    valueType: `text`,
    memoryIndex: 99999
  }
  // find the manikin that this memory belongs to
  const manikin: IManikin | undefined = workingManikins.find((workingManikin: IManikin): boolean => workingManikin.manikinIndex === miniMemory.memoryIndex)
  // if the manikin was found
  if (manikin) {
    // find the memory with a memoryName that matches the miniMemory.memoryName
    const memory: IMemory | undefined = manikin.memories.find((memory: IMemory): boolean => memory.memoryName === miniMemory.memoryName)
    // if the memory was found
    if (memory) {
      // create a new memory with the same memoryName and memoryValue as the miniMemory
      newMemory = {
        ...memory,
        memoryValue: miniMemory.memoryValue,
        isReady: memory.validator(miniMemory.memoryValue)
      }
    } else {
      throw new Error(`Error: Could not restore memory.  Memory with memoryName ${miniMemory.memoryName} not found`)
    }
  }
  return newMemory
}
