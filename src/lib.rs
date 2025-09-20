//! # MegaDocker
//!
//! Modular Enterprise-Grade Automated Docker - A tool for creating Docker Swarm configurations.
//!
//! MegaDocker makes microservices using 4 fundamental building blocks:
//! - **Mobs**: an armada of manikins running around doing your bidding
//! - **Manikins**: little wooden dolls that want do your bidding  
//! - **Mites**: magical doodads that bring a manikin to life to do your bidding
//! - **Memories**: how a manikin remembers what your bidding is
//!
//! ## Core Modules
//!
//! - [`types`] - Core type definitions and domain models
//! - [`cli`] - Command line interface 
//! - [`builder`] - Logic for building Docker configurations
//! - [`docker`] - Docker integration and orchestration
//! - [`file`] - File generation and management
//! - [`error`] - Error types and handling

pub mod builder;
pub mod cli;
pub mod docker;
pub mod error;
pub mod file;
pub mod types;

pub use error::{Error, Result};

/// Current version of MegaDocker
pub const VERSION: &str = env!("CARGO_PKG_VERSION");

/// Version string with beta suffix to match original
pub const CURRENT_MEGADOCKER_VERSION: &str = "beta-0.5.2";