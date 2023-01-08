//  IMiniManikin.rs
//  MEGADocker
//  a struct that represents a minimized Manikin
//  Created by George Georgulas IV on 2/28/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

use src::structs::object_interfaces::IMiniMemory;

pub struct IMiniManikin {
  pub mini_memories: Vec<IMiniMemory>,
  pub manikin_name: String,
}
