/** @format */

//  IZipValues.ts
//  MEGADocker
//  an interface that represents the values necessary to export a zip file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../objectInterfaces/IMemory'
import { IManikin } from '../objectInterfaces/IManikin'
/**
 * interface for values to build an exported zip file
 * @param manikins an array of IManikins
 * @param memories an array of IMemories
 */
export interface IZipValues {
  manikins: IManikin[]
  memories: IMemory[]
}
