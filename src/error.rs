//! Error types and handling for MegaDocker

use thiserror::Error;

/// Main error type for MegaDocker operations
#[derive(Error, Debug)]
pub enum Error {
    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),

    #[error("Serialization error: {0}")]
    Serialization(#[from] serde_json::Error),

    #[error("YAML error: {0}")]
    Yaml(#[from] serde_yaml::Error),

    #[error("TOML error: {0}")]
    Toml(#[from] toml::de::Error),

    #[error("ZIP error: {0}")]
    Zip(#[from] zip::result::ZipError),

    #[error("HTTP error: {0}")]
    Http(#[from] reqwest::Error),

    #[error("Docker error: {0}")]
    Docker(#[from] bollard::errors::Error),

    #[error("Configuration error: {0}")]
    Config(#[from] config::ConfigError),

    #[error("Validation error: {0}")]
    Validation(String),

    #[error("Manikin not found: {0}")]
    ManikinNotFound(String),

    #[error("Memory not found: {0}")]
    MemoryNotFound(String),

    #[error("Invalid mob file: {0}")]
    InvalidMobFile(String),

    #[error("Docker Swarm not available")]
    DockerSwarmNotAvailable,

    #[error("File generation error: {0}")]
    FileGeneration(String),

    #[error("Template error: {0}")]
    Template(String),
}

/// Convenient Result type alias
pub type Result<T> = std::result::Result<T, Error>;