//  IThemeString.rs
//  MEGADocker
//  a union type of string literals that represent available themes
//  Created by George Georgulas IV on 3/5/22.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub type theme_string_union = &'static str;

pub const DARK: IThemeString = "dark";
pub const LIGHT: IThemeString = "light";
