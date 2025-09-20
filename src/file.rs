//! File management operations for MegaDocker

use crate::types::{Mob, CustomMite, FileExtension};
use crate::{Error, Result};
use std::fs;
use std::path::{Path, PathBuf};
use std::io::Write;
use tracing::{info, debug};
use zip::{ZipWriter, write::SimpleFileOptions};

/// Manages file operations for MegaDocker
#[derive(Debug)]
pub struct FileManager {
    output_dir: PathBuf,
}

impl FileManager {
    /// Create a new FileManager with the specified output directory
    pub fn new(output_dir: PathBuf) -> Self {
        Self { output_dir }
    }

    /// Save a mob to a .mob file
    pub async fn save_mob_file(&self, mob: &Mob) -> Result<PathBuf> {
        let mob_filename = format!("{}.mob", mob.mob_name);
        let mob_path = self.output_dir.join(&mob_filename);
        
        // Ensure output directory exists
        fs::create_dir_all(&self.output_dir)?;
        
        // Serialize mob to JSON
        let mob_json = serde_json::to_string_pretty(mob)?;
        fs::write(&mob_path, mob_json)?;
        
        info!("Saved mob file: {:?}", mob_path);
        Ok(mob_path)
    }

    /// Load a mob from a .mob file
    pub async fn load_mob_file(&self, mob_path: &Path) -> Result<Mob> {
        let content = fs::read_to_string(mob_path)?;
        let mob: Mob = serde_json::from_str(&content)?;
        
        info!("Loaded mob: {} from {:?}", mob.mob_name, mob_path);
        Ok(mob)
    }

    /// Generate Docker Swarm files from a mob
    pub async fn generate_swarm_files(
        &self,
        mob: &Mob,
        generate_scripts: bool,
        domain: Option<&str>,
    ) -> Result<()> {
        let mob_dir = self.output_dir.join(&mob.mob_name);
        fs::create_dir_all(&mob_dir)?;
        
        // Generate docker-compose.yml
        self.generate_docker_compose(&mob_dir, mob, domain).await?;
        
        // Generate convenience scripts if requested
        if generate_scripts {
            self.generate_convenience_scripts(&mob_dir, mob, domain).await?;
        }
        
        // Generate custom files from mites
        self.generate_custom_files(&mob_dir, mob).await?;
        
        info!("Generated Docker Swarm files in: {:?}", mob_dir);
        Ok(())
    }

    /// Generate docker-compose.yml file
    async fn generate_docker_compose(
        &self,
        mob_dir: &Path,
        mob: &Mob,
        _domain: Option<&str>,
    ) -> Result<()> {
        let compose_path = mob_dir.join("docker-compose.yml");
        
        // Build the docker-compose content
        // This is a simplified version - the full implementation would use the mites
        let mut compose_content = String::from("version: '3.8'\n\nservices:\n");
        
        // Add services for each manikin
        for manikin in &mob.mob_manikins {
            compose_content.push_str(&format!("  service_{}:\n", manikin.manikin_index));
            compose_content.push_str("    image: placeholder:latest\n");
            compose_content.push_str("    networks:\n");
            compose_content.push_str("      - megadocker\n");
            
            // Add environment variables from memories
            if !manikin.memories.is_empty() {
                compose_content.push_str("    environment:\n");
                for memory in &manikin.memories {
                    if !memory.memory_value.is_empty() {
                        compose_content.push_str(&format!(
                            "      {}: \"{}\"\n",
                            memory.memory_marker.replace("%%", "").replace("%%", ""),
                            memory.memory_value
                        ));
                    }
                }
            }
            
            compose_content.push('\n');
        }
        
        // Add networks section
        compose_content.push_str("networks:\n");
        compose_content.push_str("  megadocker:\n");
        compose_content.push_str("    external: true\n");
        
        fs::write(compose_path, compose_content)?;
        Ok(())
    }

    /// Generate convenience scripts
    async fn generate_convenience_scripts(
        &self,
        mob_dir: &Path,
        mob: &Mob,
        domain: Option<&str>,
    ) -> Result<()> {
        // Generate launchstack.sh
        self.generate_launch_script(mob_dir, mob).await?;
        
        // Generate stopstack.sh
        self.generate_stop_script(mob_dir, mob).await?;
        
        // Generate setupdns.sh if domain is provided
        if domain.is_some() {
            self.generate_dns_script(mob_dir, mob, domain).await?;
        }
        
        Ok(())
    }

    /// Generate launch script
    async fn generate_launch_script(&self, mob_dir: &Path, mob: &Mob) -> Result<()> {
        let script_path = mob_dir.join("launchstack.sh");
        
        let script_content = format!(
            r#"#!/bin/sh
export HOSTUSERID=$(id -u)
export HOSTUSERGID=$(id -g)

# Detect timezone
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  export HOSTTIMEZONE=$(wget -q -O - https://ipapi.co/timezone)
elif [[ "$OSTYPE" == "darwin"* ]]; then
  export HOSTTIMEZONE=$(curl -s https://ipapi.co/timezone)
elif [[ "$OSTYPE" == "win32" ]]; then
  export HOSTTIMEZONE=$(curl https://ipapi.co/timezone)
else
  echo "Setting default timezone as 'America/New_York' because we couldn't determine OS type"
  export HOSTTIMEZONE=America/New_York
fi

echo "Launching {} stack..."
echo "Running on $OSTYPE with user id $HOSTUSERID"
echo "Timezone: $HOSTTIMEZONE"

# Create network if it doesn't exist
docker network create --driver overlay megadocker 2>/dev/null || true

# Deploy the stack
docker stack deploy -c docker-compose.yml {}

echo "{} stack deployed successfully!"
"#,
            mob.mob_name, mob.mob_name, mob.mob_name
        );
        
        fs::write(&script_path, script_content)?;
        self.make_executable(&script_path)?;
        
        Ok(())
    }

    /// Generate stop script
    async fn generate_stop_script(&self, mob_dir: &Path, mob: &Mob) -> Result<()> {
        let script_path = mob_dir.join("stopstack.sh");
        
        let script_content = format!(
            r#"#!/bin/sh
echo "Stopping {} stack..."
docker stack rm {}
echo "{} stack stopped!"
"#,
            mob.mob_name, mob.mob_name, mob.mob_name
        );
        
        fs::write(&script_path, script_content)?;
        self.make_executable(&script_path)?;
        
        Ok(())
    }

    /// Generate DNS setup script
    async fn generate_dns_script(
        &self,
        mob_dir: &Path,
        mob: &Mob,
        domain: Option<&str>,
    ) -> Result<()> {
        let script_path = mob_dir.join("setupdns.sh");
        let domain = domain.unwrap_or("example.com");
        
        let script_content = format!(
            r#"#!/bin/sh
# DNS setup script for {}
echo "Setting up DNS for domain: {}"

# Check if jq is installed
ISJQINSTALLED=$(which jq)
if [ "${{ISJQINSTALLED}}" = 'jq not found' ]; then
  echo "Error: jq not found. Please install jq first."
  echo "Try 'sudo apt install jq' on Debian/Ubuntu"
  echo "Try 'brew install jq' on macOS"
  exit 1
fi

echo "DNS setup would configure records for {}"
echo "This is a placeholder - implement Cloudflare API calls here"
"#,
            mob.mob_name, domain, domain
        );
        
        fs::write(&script_path, script_content)?;
        self.make_executable(&script_path)?;
        
        Ok(())
    }

    /// Generate custom files from mites
    async fn generate_custom_files(&self, mob_dir: &Path, _mob: &Mob) -> Result<()> {
        // This would iterate through custom mites and generate their files
        // For now, just create a placeholder configs directory
        let configs_dir = mob_dir.join("configs");
        fs::create_dir_all(configs_dir)?;
        
        debug!("Custom file generation placeholder - would process mites here");
        Ok(())
    }

    /// Make a file executable
    fn make_executable(&self, path: &Path) -> Result<()> {
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            let metadata = fs::metadata(path)?;
            let mut perms = metadata.permissions();
            perms.set_mode(0o755);
            fs::set_permissions(path, perms)?;
        }
        
        Ok(())
    }

    /// Create a ZIP archive of the mob directory
    pub async fn create_zip_archive(&self, mob: &Mob) -> Result<PathBuf> {
        let mob_dir = self.output_dir.join(&mob.mob_name);
        let zip_path = self.output_dir.join(format!("{}.zip", mob.mob_name));
        
        let zip_file = fs::File::create(&zip_path)?;
        let mut zip = ZipWriter::new(zip_file);
        
        self.add_directory_to_zip(&mut zip, &mob_dir, &mob.mob_name)?;
        
        zip.finish()?;
        
        info!("Created ZIP archive: {:?}", zip_path);
        Ok(zip_path)
    }

    /// Recursively add directory contents to ZIP
    fn add_directory_to_zip(
        &self,
        zip: &mut ZipWriter<fs::File>,
        dir: &Path,
        prefix: &str,
    ) -> Result<()> {
        let options = SimpleFileOptions::default()
            .compression_method(zip::CompressionMethod::Deflated)
            .unix_permissions(0o755);

        for entry in walkdir::WalkDir::new(dir) {
            let entry = entry.map_err(|e| Error::Io(std::io::Error::new(std::io::ErrorKind::Other, e)))?;
            let path = entry.path();
            
            if path.is_file() {
                let relative_path = path.strip_prefix(dir)
                    .map_err(|e| Error::Io(std::io::Error::new(std::io::ErrorKind::Other, e)))?;
                let zip_path = format!("{}/{}", prefix, relative_path.display());
                
                zip.start_file(&zip_path, options)?;
                let content = fs::read(path)?;
                zip.write_all(&content)?;
            }
        }
        
        Ok(())
    }
}