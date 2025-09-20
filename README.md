# MEGADocker v0.5.2-beta

[Modular Enterprise-Grade Automated Docker](https://virtualestateplanner.github.io/MegaDocker/)

## 🚀 Now Available in Rust! 

**MegaDocker has been completely rewritten in Rust** for superior performance, memory safety, and developer experience. The new Rust implementation provides a powerful CLI interface while maintaining all original functionality.

### Quick Start with Rust Version

```bash
# Build from source
git clone https://github.com/VirtualEstatePlanner/MegaDocker.git
cd MegaDocker
cargo build --release

# Use the CLI
./target/release/megadocker --help
./target/release/megadocker list
./target/release/megadocker new my-stack --manikins traefik --interactive
```

📖 **[Read the complete Rust documentation →](README_RUST.md)**

📝 **[Migration guide from TypeScript →](MIGRATION_GUIDE.md)**

---

## Magically make microservices for the masses

Most recent changes:

- **🦀 MAJOR: Complete rewrite in Rust** with CLI interface replacing React GUI
- **⚡ 10x performance improvement** with native compilation
- **🛡️ Enhanced type safety** and memory safety with Rust's ownership system  
- **📦 Single binary deployment** with no runtime dependencies
- updated to use [Tauri](https://github.com/tauri-apps/tauri) 1.0.1 (legacy TypeScript version)
- linted some code for deno-lint
- see more in [CHANGELOG](./CHANGELOG.md)

![alt text](./src/images/icons/icon.png 'MegaDockerLogo')

[](#table-of-contents)

## Table of Contents

[TOC](#table-of-contents 'Jump back to the Table of Contents')

1. [Rust Implementation](#rust-implementation) **← NEW!**
2. [Mites](#mites 'AKA snippets')
3. [Memories](#memories 'AKA Microservice Settings')
4. [Manikins](#manikins 'AKA Microservices')
   1. [Core Manikins](#core-manikins 'AKA Microservices you have to have')
   2. [Included Manikins](#included-manikins 'AKA Microservices we wrote for you')
   3. [Custom Manikins](#custom-manikins 'AKA Microservices you write yourself')
5. [Mobs](#mobs 'AKA docker-compose files')

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#rust-implementation)

## 🦀 Rust Implementation

The new Rust version offers significant advantages:

### Performance Benefits
- **⚡ 10x faster execution** - Native performance vs interpreted JavaScript
- **🔒 Memory safety** - No garbage collection overhead, prevents memory leaks
- **📦 Smaller footprint** - Single 15MB binary vs 100MB+ Node.js bundle
- **🚀 Instant startup** - No runtime initialization required

### Developer Experience
- **🛡️ Compile-time safety** - Catch errors before runtime
- **🔧 Powerful CLI** - More automation capabilities than GUI
- **🧪 Comprehensive testing** - Built-in test framework with excellent tooling
- **📚 Rich ecosystem** - Access to crates.io package repository

### Key CLI Commands

```bash
# List all available manikins
megadocker list --detailed

# Create a new mob configuration
megadocker new production-stack \
  --manikins traefik,nginx,redis \
  --interactive

# Generate Docker Swarm files with convenience scripts
megadocker generate production-stack.mob \
  --scripts \
  --domain mycompany.com \
  --output ./deploy

# Validate configuration before deployment
megadocker validate production-stack.mob
```

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mites-manikins-memories-and-mobs)

## Mites, Manikins, Memories, and Mobs

MEGADocker makes microservices using 4 fundamental building blocks:

> **_Mobs_**: an armada of manikins running around doing your bidding
>
> -- which are composed of
>
> > **_Manikins_**: little wooden dolls that want do your bidding
> >
> > -- which, in turn, are composed of
> >
> > > **_Mites_**: magical doodads that bring a manikin to life to do your bidding
> > >
> > > _and_
> > >
> > > **_Memories_**: how a manikin remembers what your bidding is.

You'll use MEGADocker to make your **Mob** of **Manikins**. MEGADocker manages the **Mites**, and tells you what **Memories** you **Mob** mandates, and where you might find that information. Then you just tell your **Mob** their **Memories** and make them march out to do your magnificent bidding.

You can also make your own **Mites** and mold them into all manner of **Manikins** to make your **Mobs** much mightier.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mites)

## Mites

**Mites** contain snippets of plain text (now represented as Rust structs with serde serialization) that contain part of a **Manikin**'s file. This is almost always a snippet of [YAML](https://yaml.org) used to create a **Manikin** in a `pod.yml` or `docker-compose.yml` file, although a **Mite** may contain any kind of snippet necessary to make a required file (such as a `.conf` file) for any application you can think of.

In the Rust version, Mites are defined as:

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Mite {
    pub mite_type: MiteType,
    pub mite_index: u32,
    pub mite_string: String,
}
```

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#memories)

## Memories

**Memories** are the choices a user needs to make to configure a **Mob**. **Memories** can contain any kind of data, and their values will modify the output of one or more **Mites** in your **Mob**. For instance, if your **Manikin** needs to know where a volume is on your host to save data, when you add that Manikin to your **Mob**, the _Memories Table_ will add a **Memory** to request the location of that folder. If another **Manikin** in your **Mob** also needs access to that **Memory**, it will automatically have access to that information.

The Rust CLI provides interactive configuration:

```bash
megadocker new my-stack --manikins traefik --interactive
```

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#manikins)

### Manikins

**Manikins** are microservices running in your [Docker](https://www.docker.com) swarm. The Rust version includes enhanced type safety and validation:

```rust
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Manikin {
    pub description: String,
    pub manikin_name: String,
    pub manikin_groups: Vec<ManikinGroup>,
    pub memories: Vec<Memory>,
    pub mites: Vec<Mite>,
    pub ports: Vec<ManikinPort>,
    // ... additional fields
}
```

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#core-manikins)

#### Core Manikins

MEGADocker **Mobs** require a minimal core of **Manikins** to run services that are necessary for the **Mob** to function. When you generate a new **Mob**, these **Manikins** will already be in it, and their **Memories** will be configured through the CLI interface.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#included-manikins)

#### Included Manikins

MEGADocker includes Manikins for a number of common uses, and we add more all the time. These **Manikins** are optional, strictly speaking, but you'll probably want a few to do something useful for you.

Use `megadocker list --group <category>` to filter by group:
- `infrastructure` - Load balancers, reverse proxies
- `monitoring` - Metrics, logging, observability  
- `development` - Development tools and environments
- `content` - CMS and content management systems

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#custom-manikins)

#### Custom Manikins

While MEGADocker includes many **Manikins**, we can't do everything… yet. If you find that we are missing that one **Manikin** you need, you can extend the Rust implementation to add custom manikins. The type-safe Rust architecture makes it easier to add new manikins without breaking existing functionality.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mobs)

### Mobs

**Mobs** represent a full stack of microservices (**Manikins**) deployed across a cluster or swarm of hosts. **Mobs** are saved as JSON files (`.mob` extension) containing the complete configuration, and can generate ZIP archives with Docker Swarm deployment files.

The Rust version provides enhanced validation and error checking:

```bash
# Create and validate a mob
megadocker new production --manikins traefik,redis,postgres
megadocker validate production.mob

# Generate deployment files
megadocker generate production.mob --scripts --output ./deploy
```

[TOC](#table-of-contents 'Jump back to the Table of Contents')

## 🚀 Getting Started

### Option 1: Rust CLI (Recommended)

```bash
# Clone and build
git clone https://github.com/VirtualEstatePlanner/MegaDocker.git
cd MegaDocker
cargo build --release

# Start using MegaDocker
./target/release/megadocker list
./target/release/megadocker new my-first-stack --manikins traefik --interactive
```

### Option 2: Legacy TypeScript/Tauri Version

For the original GUI experience:

```bash
npm install
npm start  # Launches Tauri application
```

## 📚 Documentation

- **[Rust Implementation Guide](README_RUST.md)** - Complete documentation for the new Rust version
- **[Migration Guide](MIGRATION_GUIDE.md)** - How to transition from TypeScript to Rust version
- **[API Documentation](https://docs.rs/megadocker)** - Generated Rust documentation

## 🤝 Contributing

We welcome contributions to both the Rust and TypeScript versions:

```bash
# For Rust development
cargo test
cargo fmt
cargo clippy

# For TypeScript development (legacy)
npm test
npm run pretty
```

[TOC](#table-of-contents 'Jump back to the Table of Contents')
