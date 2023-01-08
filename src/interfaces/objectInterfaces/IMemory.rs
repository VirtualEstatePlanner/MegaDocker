//  IMemory.rs
//  MEGADocker
//  a struct that represents a Memory used by a Manikin - a variable that will need to be chosen and set by the user
//  Created by George Georgulas IV on 1/26/19.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub struct IMemory {
    pub is_ready: bool,
    pub memory_index: u32,
    pub memory_marker: IMemoryMarker,
    pub memory_name: String,
    pub memory_type: IMemoryType,
    pub memory_value: String,
    pub should_autocomplete: bool,
    pub tooltip: String,
    pub validator: fn() -> bool,
    pub value_type: IMemoryValueType,
}
