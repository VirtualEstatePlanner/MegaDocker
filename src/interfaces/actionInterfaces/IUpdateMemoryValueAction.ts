/** @format */

//  IUpdateMemoryValueAction.ts
//  MEGADocker
//  interface for a React Context dispatch to update the value of a memory
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../objectInterfaces/IMemory'

export interface IUpdateMemoryValueAction {
  type: `UPDATE_MEMORY_VALUE`
  payload: {
    memory: IMemory
    value: string
  }
}
