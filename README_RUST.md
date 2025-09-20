# MegaDocker v0.5.2-beta (Rust Edition)

**Modular Enterprise-Grade Automated Docker** - A high-performance Rust CLI tool for creating Docker Swarm configurations.

![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## 🚀 Overview

MegaDocker has been completely rewritten in Rust, providing blazing fast performance, memory safety, and enhanced type safety while maintaining all the original functionality. This CLI tool helps you create sophisticated Docker Swarm deployments using a modular approach with **Mites**, **Memories**, **Manikins**, and **Mobs**.

### Core Concepts

- **🧩 Mites**: Building blocks/snippets (mostly YAML) that define parts of microservices
- **🧠 Memories**: Configuration values and variables that customize your services  
- **🎭 Manikins**: Complete microservices built from Mites and configured with Memories
- **👥 Mobs**: Collections of Manikins representing full application stacks

## 📦 Installation

### From Source (Rust Required)

```bash
git clone https://github.com/VirtualEstatePlanner/MegaDocker.git
cd MegaDocker
cargo build --release
./target/release/megadocker --help
```

### Prerequisites

- Rust 1.70+ (for building from source)
- Docker with Swarm mode enabled
- Linux, macOS, or Windows

## 🛠️ Usage

### Quick Start

```bash
# List available manikins
megadocker list

# Get detailed information about a manikin
megadocker info traefik

# Create a new mob with interactive configuration
megadocker new my-app --manikins traefik --interactive

# Generate Docker Swarm files
megadocker generate my-app.mob --scripts --domain example.com

# Validate a mob configuration
megadocker validate my-app.mob
```

### Command Reference

#### Create New Mob
```bash
# Basic mob creation
megadocker new my-stack --manikins traefik,nginx

# Interactive configuration
megadocker new my-stack --manikins traefik --interactive --output ./stacks/
```

#### List Available Manikins
```bash
# List all manikins
megadocker list

# Filter by group
megadocker list --group infrastructure

# Detailed view
megadocker list --detailed
```

#### Generate Docker Swarm Configuration
```bash
# Generate docker-compose.yml and configs
megadocker generate my-app.mob --output ./deploy/

# Include convenience scripts
megadocker generate my-app.mob --scripts --domain mydomain.com
```

#### Load and Modify Existing Mob
```bash
# Load existing mob file
megadocker load existing-mob.mob --output ./modified/

# Regenerate without prompting
megadocker load existing-mob.mob --regenerate
```

## 🏗️ Project Structure

The Rust implementation follows idiomatic Rust patterns:

```
src/
├── lib.rs          # Library root with module declarations
├── main.rs         # CLI entry point
├── cli.rs          # Command line interface using clap
├── types.rs        # Core domain models with serde
├── builder.rs      # Mob building logic
├── file.rs         # File I/O and generation
├── docker.rs       # Docker API integration using bollard
└── error.rs        # Error types using thiserror

tests/
└── integration_tests.rs  # Integration tests

Cargo.toml          # Dependencies and metadata
```

## 🔧 Dependencies

### Core Libraries
- **clap** - Command line argument parsing
- **serde** - Serialization/deserialization
- **tokio** - Async runtime
- **bollard** - Docker API client
- **anyhow/thiserror** - Error handling

### File Handling
- **zip** - Archive creation
- **serde_yaml** - YAML processing
- **serde_json** - JSON processing

## 🚦 Getting Started

1. **Initialize Docker Swarm** (if not already done):
   ```bash
   docker swarm init
   ```

2. **Create your first mob**:
   ```bash
   megadocker new my-first-stack --manikins traefik --interactive
   ```

3. **Generate and deploy**:
   ```bash
   megadocker generate my-first-stack.mob --scripts
   cd my-first-stack/
   ./launchstack.sh
   ```

## 🔍 Available Manikin Groups

- **MegaDockerCore** - Essential infrastructure components
- **Infrastructure** - Reverse proxies, load balancers
- **Development** - Development tools and IDEs
- **Monitoring** - Metrics, logging, and observability
- **Content** - CMS and content management
- **Media** - Media streaming and processing
- **Network** - Networking and security tools
- **Productivity** - Business and productivity applications

## 🧪 Testing

Run the comprehensive test suite:

```bash
# Run all tests
cargo test

# Run with verbose output
cargo test -- --nocapture

# Run specific test
cargo test test_mob_serialization
```

## 🚀 Performance Benefits

The Rust rewrite provides significant improvements:

- **⚡ Faster execution** - Native performance vs interpreted JavaScript
- **🔒 Memory safety** - No garbage collection overhead, no memory leaks
- **🛡️ Type safety** - Compile-time error checking prevents runtime issues
- **📦 Smaller binary** - Single static binary with no runtime dependencies
- **🔧 Better concurrency** - Async/await with Tokio for I/O operations

## 🛡️ Error Handling

Comprehensive error handling with detailed messages:

```rust
pub enum Error {
    Io(std::io::Error),
    Serialization(serde_json::Error),
    Docker(bollard::errors::Error),
    Validation(String),
    ManikinNotFound(String),
    // ... and more
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome-feature`
3. Make your changes
4. Add tests for new functionality
5. Run tests: `cargo test`
6. Run formatting: `cargo fmt`
7. Run linting: `cargo clippy`
8. Commit: `git commit -m 'Add awesome feature'`
9. Push: `git push origin feature/awesome-feature`
10. Create a Pull Request

## 📝 Migration from TypeScript

Key changes in the Rust version:

- **CLI Interface**: React GUI replaced with powerful CLI using `clap`
- **Type System**: TypeScript interfaces converted to Rust structs with `serde`
- **Error Handling**: JavaScript exceptions replaced with Rust's `Result<T, E>` pattern
- **Performance**: Native compilation instead of JavaScript interpretation
- **Dependencies**: Rust ecosystem crates instead of npm packages

## 🏆 Why Rust?

- **Performance**: Near C-level performance with zero-cost abstractions
- **Safety**: Memory and thread safety without garbage collection
- **Concurrency**: Fearless concurrency with ownership system
- **Ecosystem**: Rich ecosystem with `crates.io`
- **Tooling**: Excellent tooling with Cargo, rustfmt, and clippy
- **Cross-platform**: Compile to any target platform

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Original MegaDocker team for the foundational concepts
- Rust community for excellent libraries and tools
- Docker for container orchestration technology

---

**Made with ❤️ and 🦀 Rust**

For more information, visit the [original repository](https://github.com/VirtualEstatePlanner/MegaDocker) or check out the [Rust documentation](https://doc.rust-lang.org/).