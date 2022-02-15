/** @format */

//  IMob.ts
//  MEGADocker
//  an interface that represents a MEGADocker Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from './IManikin'
import { IMemory } from './IMemory'

export interface IMob {
  mobManikins: IManikin[]
  mobName: () => string
  mobMemories: IMemory[]
}
