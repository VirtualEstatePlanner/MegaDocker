/** @format */

//  getMemories.ts
//  MEGADocker
//  a function that pulls the Memories from an array of Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'

/**
 * updates memories array based on application state
 */
export const getMemories = (manikinsToGetMemoriesFrom: IManikin[]): IMemory[] =>
  manikinsToGetMemoriesFrom.filter((eachManikin: IManikin) => eachManikin.isSelected).flatMap((eachManikin) => eachManikin.memories)
