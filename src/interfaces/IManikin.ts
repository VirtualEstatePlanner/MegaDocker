/** @format */

//  IManikin.ts
//  MEGADocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite'
import { IMemory } from './IMemory'
import { IManikinGroup } from './IManikinGroup'
import { IManikinPort } from './IManikinPort'

/**
 * interface for IManikin
 * @description a short human-readable description of this IManikin
 * @folder main data folder for this IManikin
 * @isCore boolean - if true, this IManikin must be in every Mob
 * @isSelected boolean - if true, this IManikin is in the Mob
 * @manikinIcon icon of this IManikin in the Manikin table
 * @manikinIndex unique identifier of this IManikin
 * @manikinGroup category of this manikin in the Manikin Table
 * @memories array of IMemories this IManikin needs
 * @mites array of IMites this IManikin needs
 * @name the human-readable name of this manikin
 * @ports array of IManikinPorts this IManikin needs
 * @subfolders array of folders inside the data folder
 */

export interface IManikin {
  description: string
  folder: string
  isCore: boolean
  isSelected: boolean
  manikinGroups: IManikinGroup[]
  manikinIcon: string
  manikinIndex: number
  memories: IMemory[]
  mites: IMite[]
  name: string
  ports: IManikinPort[]
  subfolders: string[]
}
