/** @format */

//  IZipKubernetes.ts
//  MegaDocker
//  an interface that represents a variable used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from './IMemory'
import { IManikin } from './IManikin'

/**
 * interface for kubernetes zip
 *
 */
export interface INewMemory {
  fromManikins: number[]
  isReady: boolean
  memoryIndex: number
  name: string
  shouldAutocomplete: boolean
  tooltip: string
  validator(value: string): boolean
  value: () => string
  valueType: 'password' | 'email' | 'text'
}

// export interface INewMemory {
//   isReady: boolean;
//   memoryIndex: number;
//   name: string;
//   shouldAutocomplete: boolean;
//   tooltip: string;
//   validator(value: string): boolean;
//   value: string;
//   valueType: 'password' | 'email' | 'text';
// }
