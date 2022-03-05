/** @format */

//  getMemories.ts
//  MEGADocker
//  a function that pulls the Memories from an array of Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'

/**
 * updates memories array based on application state
 * @param manikinsToGetMemoriesFrom the manikins that have been selected
 * @returns an array of memories to build the memoryTable
 */
export const getMemories = (manikinsToGetMemoriesFrom: IManikin[]): IMemory[] =>
  manikinsToGetMemoriesFrom.filter((eachManikin: IManikin) => eachManikin.isSelected).flatMap((eachManikin) => eachManikin.memories)
