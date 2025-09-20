use anyhow::Result;
use clap::Parser;
use megadocker::cli::MegaDockerCli;
use tracing_subscriber::EnvFilter;

#[tokio::main]
async fn main() -> Result<()> {
    // Initialize logging
    tracing_subscriber::fmt()
        .with_env_filter(
            EnvFilter::from_default_env()
                .add_directive("megadocker=info".parse().unwrap_or_else(|_| {
                    tracing::Level::INFO.into()
                }))
        )
        .init();

    // Parse command line arguments
    let cli = MegaDockerCli::parse();
    
    // Execute the appropriate command
    cli.execute().await.map_err(|e| anyhow::anyhow!("MegaDocker error: {}", e))
}