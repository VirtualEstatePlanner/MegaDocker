//  IManikin.rs
//  MEGADocker
//  a struct that represents a Manikin - a collection of microservices that define a complete web application
//  Created by George Georgulas IV on 1/26/19.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

// import structs
use IManikin::IMemory;
use IManikin::IManikinPort;
use IManikin::IMiniMemory;
use IManikin::IValidator;

// import static string literal union types
use IManikinGroup::{CONTENT, DEVELOPMENT, FINANCIAL, GAME, INFRASTRUCTURE, MEDIA, MONITORING, NETWORK, ORGANIZATION, PRESENTATION, RESOURCE_MANAGEMENT, PRODUCTIVITY, UTILITY};

// TODO: this file must be verified vs it's original version's functionality.  The original TypeScript version of the file is below in the last comment of the file

pub struct IManikin {
    pub description: String,
    pub folder: String,
    pub is_core: bool,
    pub is_selected: bool,
    pub manikin_groups: Vec<IManikinGroup>,
    pub manikin_icon: String,
    pub manikin_index: u32,
    pub memories: Vec<IMemory>,
    pub mites: Vec<IMite>,
    pub manikin_name: String,
    pub ports: Vec<IManikinPort>,
    pub subfolders: Vec<String>,
}

/*
import { IMite } from './IMite'
import { IMemory } from './IMemory'
import { IManikinGroup } from '../templateLiteralUnionTypes/IManikinGroup'
import { IManikinPort } from './IManikinPort'

//  * interface for IManikin
//  * @description a short human-readable description of this IManikin
//  * @folder main data folder for this IManikin
//  * @isCore boolean - if true, this IManikin must be in every Mob
//  * @isSelected boolean - if true, this IManikin is in the Mob
//  * @manikinIcon icon of this IManikin in the Manikin table
//  * @manikinIndex unique identifier of this IManikin
//  * @manikinGroup category of this manikin in the Manikin Table
//  * @memories array of IMemories this IManikin needs
//  * @mites array of IMites this IManikin needs
//  * @name the human-readable name of this manikin
//  * @ports array of IManikinPorts this IManikin needs
//  * @subfolders array of folders inside the data folder

export interface IManikin {
  description: string
  folder: string
  isCore: boolean
  isSelected: boolean
  manikinGroups: IManikinGroup[]
  manikinIcon: string
  manikinIndex: number
  memories: IMemory[]
  mites: IMite[]
  manikinName: string
  ports: IManikinPort[]
  subfolders: string[]
}
*/