/** @format */

//  minimizeManikin.ts
//  MEGADocker
//  a function that converts an IManikin to an IMiniManikin
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IMiniMemory } from '../../interfaces/objectInterfaces/IMiniMemory'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { minimizeMemory } from './minimizeMemory'

/**
 * creates an IMiniManikin from an IManikin
 */
export const minimizeManikin: Function = (manikin: IManikin): IMiniManikin => {
  return {
    manikinIndex: manikin.manikinIndex,
    miniMemories: manikin.memories.map((memory: IMemory): IMiniMemory => minimizeMemory(memory)),
    manikinName: manikin.manikinName
  }
}
