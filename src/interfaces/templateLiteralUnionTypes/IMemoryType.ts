/** @format */

//  IMemoryType.ts
//  MEGADocker
//  a union type of string literals  that represents whether a memory should be a Docker Swarm Secret or not
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export type IMemoryType = `SecretMemory` | `NormalMemory`
