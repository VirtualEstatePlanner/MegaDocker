//  IMiteType.rs
//  MEGADocker
//  a union type of string literals that represents type for an IMite
//  Created by George Georgulas IV on 3/11/21.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub type mite_type_union = &'static str;

pub const CUSTOM: IMiteType = "Custom";
pub const DOCKER_SWARM_HEADER: IMiteType = "DockerSwarmHeader";
pub const DOCKER_SWARM_NETWORK: IMiteType = "DockerSwarmNetwork";
pub const DOCKER_SWARM_SERVICE: IMiteType = "DockerSwarmService";
pub const LDIF: IMiteType = "LDIF";
pub const N8N: IMiteType = "N8N";
