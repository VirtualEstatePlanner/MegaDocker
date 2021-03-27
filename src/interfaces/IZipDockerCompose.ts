/** @format */

//  IZipDockerCompose.ts
//  MEGADocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from './IMemory'
import { IManikin } from './IManikin'
/**
 * interface for docker compose zip
 *
 */
export interface IZipDockerCompose {
  memories: IMemory[]
  manikins: IManikin[]
}

// export interface INewManikin {
//   description: string;
//   folder: string;
//   isCore: boolean;
//   isSelected: boolean;
//   manikinIcon: string;
//   manikinIndex: number;
//   memories: IMemory[];
//   mites: IMite[];
//   name: string;
//   ports: IManikinPort[];
//   subfolders: string[];
// }
