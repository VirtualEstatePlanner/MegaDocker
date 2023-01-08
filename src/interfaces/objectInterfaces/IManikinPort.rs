//  IManikinPort.rs
//  MEGADocker
//  a struct that represents a port used by a Manikin - a network port a manikin requires
//  Created by George Georgulas IV on 1/26/19.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

use std::num::NonZeroU16;

pub struct IManikinPort {
    pub external_port: NonZeroU16,
    pub internal_port: Option<NonZeroU16>,
    pub is_udp: bool,
}

impl IManikinPort {
    pub fn new(external_port: u16, internal_port: Option<u16>, is_udp: bool) -> Result<Self, String> {
        if external_port == 0 || external_port > 65535 {
            return Err(format!("Invalid external port: {}", external_port));
        }
        if let Some(port) = internal_port {
            if port == 0 || port > 65535 {
                return Err(format!("Invalid internal port: {}", port));
            }
        }
        Ok(Self {
            external_port: NonZeroU16::new(external_port).ok_or("Invalid external port")?,
            internal_port: internal_port.map(|port| NonZeroU16::new(port).ok_or("Invalid internal port")?),
            is_udp,
        })
    }
}
