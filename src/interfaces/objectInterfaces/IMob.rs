//  IMob.rs
//  MEGADocker
//  a struct that represents a MEGADocker .mob file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IThemeString } from '../templateLiteralUnionTypes/IThemeString'
import { IMiniManikin } from './IMiniManikin'

mod src::structs::object_interfaces::mini_manikin;
mod src::structs::template_literal_union_types::theme_string_union;

use src::structs::object_interfaces::mini_manikin;
use src::structs::template_literal_union_types::theme_string_union;

pub struct Mob {
  pub mob_manikins: Vec<mini_manikin>,
  pub mob_name: String,
  pub mob_version: String,
  pub theme: theme_string_union,
}
