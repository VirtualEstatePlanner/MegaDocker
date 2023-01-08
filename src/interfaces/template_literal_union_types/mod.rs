//  src/structs/string_literal_unions/mod.rs
//  MEGADocker
//  a convenience global string constant with the current version of MEGADocker
//  Created by George Georgulas IV on 3/17/19.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub mod file_extension_union;
pub mod manikin_group_union;
pub mod memory_marker_union;
pub mod memory_type_union;
pub mod memory_value_type_union;
pub mod mite_type_union;
pub mod theme_string_union;

pub use file_extension_union::*;
pub use manikin_group_union::*;
pub use memory_marker_union::*;
pub use memory_type_union::*;
pub use memory_value_type_union::*;
pub use mite_type_union::*;
pub use theme_string_union::*;
