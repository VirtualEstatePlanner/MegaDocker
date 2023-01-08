//  IFileExtension.ts
//  MEGADocker
//  a union type of string literals that represents a potential file extension used in MEGADocker
//  Created by George Georgulas IV on 3/11/21.
//  Automatically ported to Rust by chatGPT on 1/8/23.
//  Copyright © 2019-2023 The MegaDocker Group. All rights reserved.

pub type file_extension_union = &'static str;

pub const ACL: IFileExtension = "acl";
pub const CONF: IFileExtension = "conf";
pub const CONFIG: IFileExtension = "config";
pub const CRON: IFileExtension = "cron";
pub const CRT: IFileExtension = "crt";
pub const CSS: IFileExtension = "css";
pub const CSV: IFileExtension = "csv";
pub const DB: IFileExtension = "db";
pub const HTML: IFileExtension = "html";
pub const JS: IFileExtension = "js";
pub const JSON: IFileExtension = "json";
pub const KEY: IFileExtension = "key";
pub const LDIF: IFileExtension = "ldif";
pub const OPTIONS: IFileExtension = "options";
pub const PROPERTIES: IFileExtension = "properties";
pub const SH: IFileExtension = "sh";
pub const TS: IFileExtension = "ts";
pub const TXT: IFileExtension = "txt";
pub const XML: IFileExtension = "xml";
pub const YML: IFileExtension = "yml";
pub const ZIP: IFileExtension = "zip";
