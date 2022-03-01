/** @format */

import { IMiniMemory } from './IMiniMemory'

//  IMiniManikin.ts
//  MEGADocker
//  an interface that represents a minimized Manikin
//  Created by George Georgulas IV on 2/28/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * interface for a minimized IManikin to be saved to disk
 * @isSelected boolean - if true, this IMiniManikin is in the Mob
 * @manikinIndex unique identifier of this IMiniManikin
 * @miniMemories IMiniMemory[] this IMiniManikin needs
 * @name string human-readable name of this IMiniManikin
 */
export interface IMiniManikin {
  isSelected: boolean
  manikinIndex: number
  miniMemories: IMiniMemory[]
  manikinName: string
}
