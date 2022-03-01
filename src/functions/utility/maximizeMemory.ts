/** @format */

//  maximizeMemory.ts
//  MEGADocker
//  a function that converts an IMiniMemory to an IMemory
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { IMiniMemory } from '../../interfaces/objectInterfaces/IMiniMemory'

/**
 * creates an IMemory from an IMiniMemory
 */
export const maximizeMemory: Function = (memory: IMemory): IMiniMemory => {
  return {
    memoryIndex: memory.memoryIndex,
    name: memory.name,
    value: memory.value
  }
}
