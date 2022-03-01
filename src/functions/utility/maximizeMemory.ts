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
import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'

/**
 * creates an IMemory from an IMiniMemory
 */
export const maximizeMemory: Function = (miniMemory: IMiniMemory): IMemory => {
  // create an array of manikins that contain a memory with a matching name property to the miniMemory
  const manikinsWithMemory: IManikin[] = workingManikins.filter((manikin: IManikin): boolean => {
    return manikin.memories.every((memory: IMemory): boolean => {
      return memory.memoryName === miniMemory.memoryName
    })
  })
  // create an array of all memories from manikinsWithMemory
  let memories: IMemory[] = []
  manikinsWithMemory.forEach((manikin: IManikin): void => {
    memories.push(...manikin.memories)
  })
  // find the memory in the array of all memories
  const memory: IMemory | undefined = memories.find((memory: IMemory): boolean => {
    return memory.memoryName === miniMemory.memoryName
  })
  // make sure memory is not undefined
  if (memory) {
    // add miniMemory values to memory
    const maximizedMemory: IMemory = {
      memoryIndex: miniMemory.memoryIndex,
      memoryName: miniMemory.memoryName,
      value: miniMemory.value,
      isReady: memory.isReady,
      memoryMarker: memory.memoryMarker,
      memoryType: memory.memoryType,
      shouldAutocomplete: memory.shouldAutocomplete,
      tooltip: memory.tooltip,
      validator: memory.validator,
      valueType: memory.valueType
    }
    return maximizedMemory
  } else {
    throw new Error(`memory ${miniMemory.memoryName} not found in current version ${currentMegaDockerVersion} of MEGADocker`)
  }
}
