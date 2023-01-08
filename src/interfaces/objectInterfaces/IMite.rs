//  IMite.rs
//  MEGADocker
//  a struct that represents a Mite - a building block generic
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

use src::structs::object_interfaces::IMiteType;

pub struct Mite {
  pub type_: IMiteType,
  pub mite_index: u32,
  pub mite_string: String,
}
