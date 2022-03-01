/** @format */

import { IMiniMemory } from './IMiniMemory'

//  IMiniManikin.ts
//  MEGADocker
//  an interface that represents a minimized Manikin
//  Created by George Georgulas IV on 2/28/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * interface for IMiniManikin
 * @isSelected boolean - if true, this IManikin is in the Mob
 * @manikinIndex unique identifier of this IManikin
 * @memories array of IMemories this IManikin needs
 * @name the human-readable name of this manikin
 */

export interface IMiniManikin {
  isSelected: boolean
  manikinIndex: number
  miniMemories: IMiniMemory[]
  name: string
}
