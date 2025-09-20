//! Logic for building and configuring Mobs from Manikins

use crate::types::{Manikin, ManikinGroup, Mob, Memory, MiniManikin, Theme};
use crate::{Error, Result};
use std::collections::HashMap;
use std::io::{self, Write};
use tracing::{info, warn};

/// Builder for creating and configuring Mobs
#[derive(Debug)]
pub struct MobBuilder {
    mob_name: String,
    available_manikins: Vec<Manikin>,
    selected_manikins: Vec<Manikin>,
    configured_memories: HashMap<u32, String>, // memory_index -> value
}

impl MobBuilder {
    /// Create a new MobBuilder with the given mob name
    pub fn new(mob_name: String) -> Self {
        Self {
            mob_name,
            available_manikins: Self::load_available_manikins(),
            selected_manikins: Vec::new(),
            configured_memories: HashMap::new(),
        }
    }

    /// Load available manikins from the embedded data
    /// In a real implementation, this would load from configuration files or a database
    fn load_available_manikins() -> Vec<Manikin> {
        // For now, return some core manikins as examples
        // In the full implementation, this would load all manikin definitions
        vec![
            Manikin {
                description: "Traefik reverse proxy and load balancer".to_string(),
                folder: "traefik".to_string(),
                is_core: true,
                is_selected: false,
                manikin_groups: vec![ManikinGroup::MegaDockerCore, ManikinGroup::Infrastructure],
                manikin_icon: "🔀".to_string(),
                manikin_index: 1,
                memories: vec![
                    Memory {
                        is_ready: false,
                        memory_index: 1,
                        memory_marker: "%%DOMAIN%%".to_string(),
                        memory_name: "Domain Name".to_string(),
                        memory_type: crate::types::MemoryType::NormalMemory,
                        memory_value: String::new(),
                        should_autocomplete: false,
                        tooltip: "The domain name for your services".to_string(),
                        value_type: crate::types::MemoryValueType::Text,
                    }
                ],
                mites: Vec::new(), // Would be populated with actual mites
                manikin_name: "Traefik".to_string(),
                ports: vec![
                    crate::types::ManikinPort {
                        port: 80,
                        description: "HTTP".to_string(),
                        required: true,
                    },
                    crate::types::ManikinPort {
                        port: 443,
                        description: "HTTPS".to_string(),
                        required: true,
                    },
                ],
                subfolders: vec!["config".to_string(), "certs".to_string()],
            },
            // Add more core and optional manikins here
        ]
    }

    /// Add a manikin by name
    pub fn add_manikin_by_name(&mut self, name: &str) -> Result<()> {
        let manikin = self.available_manikins
            .iter()
            .find(|m| m.manikin_name.eq_ignore_ascii_case(name))
            .cloned()
            .ok_or_else(|| Error::ManikinNotFound(name.to_string()))?;
        
        self.add_manikin(manikin)
    }

    /// Add a manikin by index
    pub fn add_manikin_by_index(&mut self, index: u32) -> Result<()> {
        let manikin = self.available_manikins
            .iter()
            .find(|m| m.manikin_index == index)
            .cloned()
            .ok_or_else(|| Error::ManikinNotFound(index.to_string()))?;
        
        self.add_manikin(manikin)
    }

    /// Add a manikin to the selection
    pub fn add_manikin(&mut self, mut manikin: Manikin) -> Result<()> {
        // Check if already selected
        if self.selected_manikins.iter().any(|m| m.manikin_index == manikin.manikin_index) {
            warn!("Manikin '{}' is already selected", manikin.manikin_name);
            return Ok(());
        }

        manikin.is_selected = true;
        info!("Added manikin: {}", manikin.manikin_name);
        self.selected_manikins.push(manikin);
        Ok(())
    }

    /// Remove a manikin from the selection
    pub fn remove_manikin(&mut self, index: u32) -> Result<()> {
        self.selected_manikins.retain(|m| m.manikin_index != index);
        Ok(())
    }

    /// Get all available manikins, optionally filtered by group
    pub fn get_available_manikins(&self, group_filter: Option<&str>) -> Result<Vec<Manikin>> {
        let mut manikins = self.available_manikins.clone();
        
        if let Some(group_name) = group_filter {
            let filter_group = match group_name.to_lowercase().as_str() {
                "core" => ManikinGroup::MegaDockerCore,
                "content" => ManikinGroup::Content,
                "development" => ManikinGroup::Development,
                "financial" => ManikinGroup::Financial,
                "game" => ManikinGroup::Game,
                "infrastructure" => ManikinGroup::Infrastructure,
                "media" => ManikinGroup::Media,
                "monitoring" => ManikinGroup::Monitoring,
                "network" => ManikinGroup::Network,
                "organization" => ManikinGroup::Organization,
                "presentation" => ManikinGroup::Presentation,
                "resource" => ManikinGroup::ResourceManagement,
                "productivity" => ManikinGroup::Productivity,
                "utility" => ManikinGroup::Utility,
                _ => return Err(Error::Validation(format!("Unknown group: {}", group_name))),
            };
            
            manikins.retain(|m| m.manikin_groups.contains(&filter_group));
        }
        
        Ok(manikins)
    }

    /// Get information about a specific manikin
    pub fn get_manikin_info(&self, identifier: &str) -> Result<Manikin> {
        // Try to parse as index first
        if let Ok(index) = identifier.parse::<u32>() {
            return self.available_manikins
                .iter()
                .find(|m| m.manikin_index == index)
                .cloned()
                .ok_or_else(|| Error::ManikinNotFound(identifier.to_string()));
        }
        
        // Otherwise search by name
        self.available_manikins
            .iter()
            .find(|m| m.manikin_name.eq_ignore_ascii_case(identifier))
            .cloned()
            .ok_or_else(|| Error::ManikinNotFound(identifier.to_string()))
    }

    /// Configure memories interactively
    pub fn configure_memories_interactive(&mut self) -> Result<()> {
        let all_memories = self.collect_required_memories();
        
        println!("🔧 Configuring memories for mob '{}'", self.mob_name);
        println!("Please provide values for the following configuration items:\n");
        
        for memory in all_memories {
            let prompt = format!("{} ({})", memory.memory_name, memory.memory_marker);
            
            if !memory.tooltip.is_empty() {
                println!("💡 {}", memory.tooltip);
            }
            
            loop {
                print!("{}: ", prompt);
                io::stdout().flush().unwrap();
                
                let mut input = String::new();
                io::stdin().read_line(&mut input)?;
                let value = input.trim().to_string();
                
                if !value.is_empty() {
                    self.configured_memories.insert(memory.memory_index, value);
                    break;
                } else {
                    println!("⚠️  Value cannot be empty. Please try again.");
                }
            }
            println!();
        }
        
        Ok(())
    }

    /// Collect all required memories from selected manikins
    fn collect_required_memories(&self) -> Vec<Memory> {
        let mut memories = Vec::new();
        let mut seen_indices = std::collections::HashSet::new();
        
        for manikin in &self.selected_manikins {
            for memory in &manikin.memories {
                if seen_indices.insert(memory.memory_index) {
                    memories.push(memory.clone());
                }
            }
        }
        
        memories
    }

    /// Set a memory value
    pub fn set_memory_value(&mut self, memory_index: u32, value: String) {
        self.configured_memories.insert(memory_index, value);
    }

    /// Build the final Mob
    pub fn build(self) -> Result<Mob> {
        if self.selected_manikins.is_empty() {
            return Err(Error::Validation("Mob must contain at least one manikin".to_string()));
        }
        
        // Ensure all core manikins are included
        self.validate_core_manikins()?;
        
        // Create mini manikins with configured memories
        let mut mob_manikins = Vec::new();
        
        for manikin in &self.selected_manikins {
            let mut memories = Vec::new();
            
            for memory in &manikin.memories {
                let mut configured_memory = memory.clone();
                
                if let Some(value) = self.configured_memories.get(&memory.memory_index) {
                    configured_memory.memory_value = value.clone();
                    configured_memory.validate();
                }
                
                memories.push(configured_memory);
            }
            
            mob_manikins.push(MiniManikin {
                manikin_index: manikin.manikin_index,
                memories,
            });
        }
        
        Ok(Mob {
            mob_manikins,
            mob_name: self.mob_name,
            mob_version: crate::CURRENT_MEGADOCKER_VERSION.to_string(),
            theme: Theme::Light,
        })
    }

    /// Validate that all required core manikins are included
    fn validate_core_manikins(&self) -> Result<()> {
        let core_manikins: Vec<_> = self.available_manikins
            .iter()
            .filter(|m| m.is_core)
            .collect();
        
        for core_manikin in core_manikins {
            if !self.selected_manikins.iter().any(|m| m.manikin_index == core_manikin.manikin_index) {
                warn!("Adding required core manikin: {}", core_manikin.manikin_name);
                // Could auto-add core manikins here
            }
        }
        
        Ok(())
    }
}

impl Default for MobBuilder {
    fn default() -> Self {
        Self::new("default-mob".to_string())
    }
}