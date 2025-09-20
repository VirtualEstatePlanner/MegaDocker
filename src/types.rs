//! Core type definitions and domain models for MegaDocker

use serde::{Deserialize, Serialize};
use std::collections::HashMap;

/// Types of Mites (building blocks)
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum MiteType {
    Custom,
    DockerSwarmHeader,
    DockerSwarmNetwork,
    DockerSwarmService,
    LDIF,
    N8N,
}

/// Types of memory storage 
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum MemoryType {
    SecretMemory,
    NormalMemory,
}

/// Value input types for memories
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum MemoryValueType {
    Password,
    Email,
    Text,
}

/// File extensions supported by MegaDocker
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum FileExtension {
    Acl,
    Conf,
    Config,
    Cron,
    Crt,
    Css,
    Csv,
    Db,
    Html,
    Js,
    Json,
    Key,
    Ldif,
    Options,
    Properties,
    Sh,
    Ts,
    Txt,
    Xml,
    Yml,
    Zip,
}

impl FileExtension {
    /// Convert to file extension string
    pub fn as_str(&self) -> &'static str {
        match self {
            FileExtension::Acl => "acl",
            FileExtension::Conf => "conf",
            FileExtension::Config => "config",
            FileExtension::Cron => "cron",
            FileExtension::Crt => "crt",
            FileExtension::Css => "css",
            FileExtension::Csv => "csv",
            FileExtension::Db => "db",
            FileExtension::Html => "html",
            FileExtension::Js => "js",
            FileExtension::Json => "json",
            FileExtension::Key => "key",
            FileExtension::Ldif => "ldif",
            FileExtension::Options => "options",
            FileExtension::Properties => "properties",
            FileExtension::Sh => "sh",
            FileExtension::Ts => "ts",
            FileExtension::Txt => "txt",
            FileExtension::Xml => "xml",
            FileExtension::Yml => "yml",
            FileExtension::Zip => "zip",
        }
    }
}

/// Manikin categorization groups
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum ManikinGroup {
    Content,
    MegaDockerCore,
    Development,
    Financial,
    Game,
    Infrastructure,
    Media,
    Monitoring,
    Network,
    Organization,
    Presentation,
    ResourceManagement,
    Productivity,
    Utility,
}

/// Theme settings
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum Theme {
    Light,
    Dark,
}

/// A Mite - building block for services
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Mite {
    /// Type of mite
    pub mite_type: MiteType,
    /// Unique identifier
    pub mite_index: u32,
    /// The mite's data/content
    pub mite_string: String,
}

/// A custom file to be included in the output
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MiteFile {
    /// Path to the file in the zip folder
    pub path: String,
    /// Name of the file
    pub name: String,
    /// File extension
    pub extension: FileExtension,
    /// File contents
    pub contents: String,
    /// Unix permissions as 3-digit string (e.g., "755")
    pub permissions: String,
}

/// A custom Mite with file information
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CustomMite {
    /// Base mite information
    #[serde(flatten)]
    pub mite: Mite,
    /// File information for custom mites
    pub mite_file: MiteFile,
}

/// A Memory - configuration variable for services
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Memory {
    /// Whether this memory's value is valid
    pub is_ready: bool,
    /// Unique identifier
    pub memory_index: u32,
    /// Placeholder marker to be replaced
    pub memory_marker: String,
    /// Human-readable name
    pub memory_name: String,
    /// Type of memory (secret or normal)
    pub memory_type: MemoryType,
    /// The stored value
    pub memory_value: String,
    /// Whether to enable autocomplete in browser
    pub should_autocomplete: bool,
    /// Tooltip help text
    pub tooltip: String,
    /// Input type for the value
    pub value_type: MemoryValueType,
}

impl Memory {
    /// Validate the memory value using built-in validation
    pub fn validate(&mut self) -> bool {
        // Basic validation - extend with specific validators as needed
        self.is_ready = !self.memory_value.trim().is_empty();
        self.is_ready
    }
}

/// Port configuration for a Manikin
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ManikinPort {
    /// Port number
    pub port: u16,
    /// Description of what this port is used for
    pub description: String,
    /// Whether this port is required
    pub required: bool,
}

/// A Manikin - complete microservice configuration
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Manikin {
    /// Human-readable description
    pub description: String,
    /// Main data folder
    pub folder: String,
    /// Whether this is a core manikin (required in every mob)
    pub is_core: bool,
    /// Whether this manikin is selected for the current mob
    pub is_selected: bool,
    /// Category groups this manikin belongs to
    pub manikin_groups: Vec<ManikinGroup>,
    /// Icon identifier
    pub manikin_icon: String,
    /// Unique identifier
    pub manikin_index: u32,
    /// Required memories/configuration
    pub memories: Vec<Memory>,
    /// Mites that make up this manikin
    pub mites: Vec<Mite>,
    /// Human-readable name
    pub manikin_name: String,
    /// Port configurations
    pub ports: Vec<ManikinPort>,
    /// Subfolders within the main folder
    pub subfolders: Vec<String>,
}

/// Minimal manikin representation for serialization
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MiniManikin {
    /// Manikin identifier
    pub manikin_index: u32,
    /// Memory values
    pub memories: Vec<Memory>,
}

/// A Mob - collection of manikins representing a complete application stack
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Mob {
    /// Manikins in this mob
    pub mob_manikins: Vec<MiniManikin>,
    /// Name of the mob
    pub mob_name: String,
    /// Version of the mob format
    pub mob_version: String,
    /// UI theme preference
    pub theme: Theme,
}

/// Complete application state
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MegaDockerState {
    /// Current version
    pub megadocker_version: String,
    /// UI theme
    pub theme: Theme,
    /// Available manikins
    pub manikin_table: Vec<Manikin>,
    /// Selected manikins for current mob
    pub selected_manikins: Vec<Manikin>,
    /// Required memories for current configuration
    pub memories: Vec<Memory>,
    /// All mites in the mob
    pub all_mob_mites: Vec<Mite>,
    /// Docker service mites
    pub mob_d_service_mites: Vec<Mite>,
    /// Docker network mites  
    pub mob_d_network_mites: Vec<Mite>,
    /// Custom mites grouped by category
    pub mob_custom_mites: Vec<Vec<CustomMite>>,
    /// Generated YAML output
    pub yml_output: String,
    /// Currently loaded mob file
    pub loaded_file: Option<Mob>,
}

impl Default for MegaDockerState {
    fn default() -> Self {
        Self {
            megadocker_version: crate::CURRENT_MEGADOCKER_VERSION.to_string(),
            theme: Theme::Light,
            manikin_table: Vec::new(),
            selected_manikins: Vec::new(),
            memories: Vec::new(),
            all_mob_mites: Vec::new(),
            mob_d_service_mites: Vec::new(),
            mob_d_network_mites: Vec::new(),
            mob_custom_mites: Vec::new(),
            yml_output: String::new(),
            loaded_file: None,
        }
    }
}