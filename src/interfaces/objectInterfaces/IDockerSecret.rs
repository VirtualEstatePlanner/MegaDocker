//  IDockerSecret.rs
//  MEGADocker
//  a struct that represents a n8n.io workflow
//  Created by George Georgulas IV on 2/15/22.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub struct DockerSecret {
  pub secret_name: String,
  pub secret_value: String,
}
