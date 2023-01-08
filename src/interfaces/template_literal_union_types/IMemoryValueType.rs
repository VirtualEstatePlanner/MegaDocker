//  IMemoryValueType.rs
//  MEGADocker
//  a union type of string literals that represents a variable used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub type memory_value_type_union = &'static str;

pub const PASSWORD: IMemoryValueType = "password";
pub const EMAIL: IMemoryValueType = "email";
pub const TEXT: IMemoryValueType = "text";
