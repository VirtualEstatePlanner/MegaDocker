//  IManikinGroup.rs
//  MEGADocker
//  a union type of string literals that represents all possible Manikin classifications
//  Created by George Georgulas IV on 3/25/21.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub type manikin_group_union = &'static str;

pub const CONTENT: IManikinGroup = "Content";
pub const MEGADOCKER_CORE: IManikinGroup = "MegaDockerCore";
pub const DEVELOPMENT: IManikinGroup = "Development";
pub const FINANCIAL: IManikinGroup = "Financial";
pub const GAME: IManikinGroup = "Game";
pub const INFRASTRUCTURE: IManikinGroup = "Infrastructure";
pub const MEDIA: IManikinGroup = "Media";
pub const MONITORING: IManikinGroup = "Monitoring";
pub const NETWORK: IManikinGroup = "Network";
pub const ORGANIZATION: IManikinGroup = "Organization";
pub const PRESENTATION: IManikinGroup = "Presentation";
pub const RESOURCE_MANAGEMENT: IManikinGroup = "Resource Management";
pub const PRODUCTIVITY: IManikinGroup = "Productivity";
pub const UTILITY: IManikinGroup = "Utility";
