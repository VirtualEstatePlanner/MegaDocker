//! Command line interface for MegaDocker

use crate::types::{Mob, MegaDockerState};
use crate::{builder::MobBuilder, file::FileManager, Result};
use clap::{Parser, Subcommand};
use std::path::PathBuf;
use tracing::{info, warn};

/// MegaDocker CLI - Create Docker Swarm configurations from Manikins and Mites
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
pub struct MegaDockerCli {
    /// Enable verbose logging
    #[arg(short, long)]
    verbose: bool,

    /// Configuration file path
    #[arg(short, long)]
    config: Option<PathBuf>,

    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand, Debug)]
enum Commands {
    /// Create a new mob (Docker Swarm configuration)
    New {
        /// Name of the new mob
        name: String,
        
        /// Output directory
        #[arg(short, long, default_value = ".")]
        output: PathBuf,
        
        /// Include manikins by name or group
        #[arg(short, long)]
        manikins: Vec<String>,
        
        /// Interactive mode to configure memories
        #[arg(short, long)]
        interactive: bool,
    },
    
    /// Load and modify an existing mob file
    Load {
        /// Path to .mob file
        mob_file: PathBuf,
        
        /// Output directory  
        #[arg(short, long, default_value = ".")]
        output: PathBuf,
        
        /// Regenerate without prompting for memory values
        #[arg(short, long)]
        regenerate: bool,
    },
    
    /// List available manikins
    List {
        /// Filter by group
        #[arg(short, long)]
        group: Option<String>,
        
        /// Show detailed information
        #[arg(short, long)]
        detailed: bool,
    },
    
    /// Validate a mob configuration
    Validate {
        /// Path to .mob file or directory
        path: PathBuf,
    },
    
    /// Generate Docker Swarm files from a mob
    Generate {
        /// Path to .mob file
        mob_file: PathBuf,
        
        /// Output directory
        #[arg(short, long, default_value = ".")]
        output: PathBuf,
        
        /// Generate convenience scripts (launchstack.sh, stopstack.sh, etc.)
        #[arg(short, long)]
        scripts: bool,
        
        /// Domain name for services
        #[arg(short, long)]
        domain: Option<String>,
    },
    
    /// Show information about a specific manikin
    Info {
        /// Manikin name or index
        manikin: String,
    },
}

impl MegaDockerCli {
    /// Execute the CLI command
    pub async fn execute(self) -> Result<()> {
        if self.verbose {
            // Increase log level for verbose mode
            std::env::set_var("RUST_LOG", "debug");
        }

        match self.command {
            Commands::New { ref name, ref output, ref manikins, interactive } => {
                self.create_new_mob(name.clone(), output.clone(), manikins.clone(), interactive).await
            }
            Commands::Load { ref mob_file, ref output, regenerate } => {
                self.load_mob(mob_file.clone(), output.clone(), regenerate).await
            }
            Commands::List { ref group, detailed } => {
                self.list_manikins(group.as_deref(), detailed).await
            }
            Commands::Validate { ref path } => {
                self.validate_mob(path.clone()).await
            }
            Commands::Generate { ref mob_file, ref output, scripts, ref domain } => {
                self.generate_swarm(mob_file.clone(), output.clone(), scripts, domain.as_deref()).await
            }
            Commands::Info { ref manikin } => {
                self.show_manikin_info(manikin.clone()).await
            }
        }
    }

    async fn create_new_mob(
        &self,
        name: String,
        output: PathBuf,
        manikins: Vec<String>,
        interactive: bool,
    ) -> Result<()> {
        info!("Creating new mob: {}", name);
        
        let mut builder = MobBuilder::new(name);
        
        // Add requested manikins
        for manikin_name in manikins {
            builder.add_manikin_by_name(&manikin_name)?;
        }
        
        // If interactive, prompt for memory configuration
        if interactive {
            builder.configure_memories_interactive()?;
        }
        
        let mob = builder.build()?;
        let file_manager = FileManager::new(output);
        
        // Save the mob file
        file_manager.save_mob_file(&mob).await?;
        
        info!("Mob '{}' created successfully", mob.mob_name);
        Ok(())
    }

    async fn load_mob(
        &self,
        mob_file: PathBuf,
        output: PathBuf,
        regenerate: bool,
    ) -> Result<()> {
        info!("Loading mob from: {:?}", mob_file);
        
        let file_manager = FileManager::new(output);
        let mob = file_manager.load_mob_file(&mob_file).await?;
        
        info!("Loaded mob: {}", mob.mob_name);
        
        if !regenerate {
            // Could implement interactive re-configuration here
            warn!("Interactive reconfiguration not yet implemented");
        }
        
        // Save the loaded mob to output directory
        file_manager.save_mob_file(&mob).await?;
        
        Ok(())
    }

    async fn list_manikins(&self, group: Option<&str>, detailed: bool) -> Result<()> {
        let builder = MobBuilder::default();
        let manikins = builder.get_available_manikins(group.as_deref())?;
        
        if detailed {
            for manikin in manikins {
                println!("📦 {} ({})", manikin.manikin_name, manikin.manikin_index);
                println!("   Description: {}", manikin.description);
                println!("   Groups: {:?}", manikin.manikin_groups);
                println!("   Ports: {:?}", manikin.ports.iter().map(|p| p.port).collect::<Vec<_>>());
                println!("   Memories: {}", manikin.memories.len());
                println!();
            }
        } else {
            for manikin in manikins {
                let core_marker = if manikin.is_core { " [CORE]" } else { "" };
                println!("📦 {}{} - {}", manikin.manikin_name, core_marker, manikin.description);
            }
        }
        
        Ok(())
    }

    async fn validate_mob(&self, path: PathBuf) -> Result<()> {
        info!("Validating mob at: {:?}", path);
        
        if path.is_file() {
            let file_manager = FileManager::new(PathBuf::from("."));
            let mob = file_manager.load_mob_file(&path).await?;
            
            // Validate mob structure
            if mob.mob_name.is_empty() {
                return Err(crate::Error::Validation("Mob name cannot be empty".to_string()));
            }
            
            if mob.mob_manikins.is_empty() {
                return Err(crate::Error::Validation("Mob must contain at least one manikin".to_string()));
            }
            
            println!("✅ Mob validation passed");
            println!("   Name: {}", mob.mob_name);
            println!("   Version: {}", mob.mob_version);
            println!("   Manikins: {}", mob.mob_manikins.len());
        } else {
            return Err(crate::Error::Validation("Path must be a .mob file".to_string()));
        }
        
        Ok(())
    }

    async fn generate_swarm(
        &self,
        mob_file: PathBuf,
        output: PathBuf,
        scripts: bool,
        domain: Option<&str>,
    ) -> Result<()> {
        info!("Generating Docker Swarm configuration from: {:?}", mob_file);
        
        let file_manager = FileManager::new(output);
        let mob = file_manager.load_mob_file(&mob_file).await?;
        
        // Generate the Docker Swarm files
        file_manager.generate_swarm_files(&mob, scripts, domain).await?;
        
        info!("Docker Swarm configuration generated successfully");
        Ok(())
    }

    async fn show_manikin_info(&self, manikin: String) -> Result<()> {
        let builder = MobBuilder::default();
        let manikin_info = builder.get_manikin_info(&manikin)?;
        
        println!("🔍 Manikin Information");
        println!("Name: {}", manikin_info.manikin_name);
        println!("Description: {}", manikin_info.description);
        println!("Index: {}", manikin_info.manikin_index);
        println!("Groups: {:?}", manikin_info.manikin_groups);
        println!("Core: {}", manikin_info.is_core);
        println!("Folder: {}", manikin_info.folder);
        println!();
        println!("📝 Required Memories ({}):", manikin_info.memories.len());
        for memory in &manikin_info.memories {
            println!("  • {} ({})", memory.memory_name, memory.memory_marker);
            println!("    Type: {:?}", memory.memory_type);
            println!("    Value Type: {:?}", memory.value_type);
            if !memory.tooltip.is_empty() {
                println!("    Help: {}", memory.tooltip);
            }
        }
        println!();
        println!("🔌 Ports ({}):", manikin_info.ports.len());
        for port in &manikin_info.ports {
            let required = if port.required { " [REQUIRED]" } else { "" };
            println!("  • {}{} - {}", port.port, required, port.description);
        }
        println!();
        println!("🧩 Mites: {}", manikin_info.mites.len());
        
        Ok(())
    }
}