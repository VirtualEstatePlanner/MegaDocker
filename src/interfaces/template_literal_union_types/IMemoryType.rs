/** @format */

//  IMemoryType.ts
//  MEGADocker
//  a union type of string literals  that represents whether a memory should be a Docker Swarm Secret or not
//  Created by George Georgulas IV on 3/11/21.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub type memory_type_union = &'static str;

pub const SECRET_MEMORY: IMemoryType = "SecretMemory";
pub const NORMAL_MEMORY: IMemoryType = "NormalMemory";
