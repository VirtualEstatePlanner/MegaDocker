//  IValidator.rs
//  MEGADocker
//  a convenience global string constant with the current version of MEGADocker
//  Created by George Georgulas IV on or around 9/7/22.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

use regex::Regex;

#[derive(Debug)]
pub struct IValidator {
    pub this_regexp: regex::Regex,
    pub is_validated: bool,
}
