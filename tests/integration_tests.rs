//! Tests for MegaDocker core functionality

use megadocker::types::*;
use megadocker::builder::MobBuilder;

#[test]
fn test_memory_validation() {
    let mut memory = Memory {
        is_ready: false,
        memory_index: 1,
        memory_marker: "%%DOMAIN%%".to_string(),
        memory_name: "Domain Name".to_string(),
        memory_type: MemoryType::NormalMemory,
        memory_value: String::new(),
        should_autocomplete: false,
        tooltip: "The domain name for your services".to_string(),
        value_type: MemoryValueType::Text,
    };

    // Empty value should be invalid
    assert!(!memory.validate());
    assert!(!memory.is_ready);

    // Non-empty value should be valid
    memory.memory_value = "example.com".to_string();
    assert!(memory.validate());
    assert!(memory.is_ready);
}

#[test]
fn test_file_extension_conversion() {
    assert_eq!(FileExtension::Yml.as_str(), "yml");
    assert_eq!(FileExtension::Json.as_str(), "json");
    assert_eq!(FileExtension::Sh.as_str(), "sh");
}

#[test]
fn test_mob_builder_new() {
    let builder = MobBuilder::new("test-mob".to_string());
    let available = builder.get_available_manikins(None).unwrap();
    
    // Should have at least the core Traefik manikin
    assert!(!available.is_empty());
    assert!(available.iter().any(|m| m.manikin_name == "Traefik"));
}

#[test]
fn test_mob_builder_add_manikin() {
    let mut builder = MobBuilder::new("test-mob".to_string());
    
    // Add Traefik manikin
    builder.add_manikin_by_name("Traefik").unwrap();
    
    // Try to build - should succeed with at least one manikin
    let mob = builder.build().unwrap();
    assert_eq!(mob.mob_name, "test-mob");
    assert!(!mob.mob_manikins.is_empty());
}

#[test]
fn test_mob_serialization() {
    let mob = Mob {
        mob_manikins: vec![
            MiniManikin {
                manikin_index: 1,
                memories: vec![
                    Memory {
                        is_ready: true,
                        memory_index: 1,
                        memory_marker: "%%DOMAIN%%".to_string(),
                        memory_name: "Domain Name".to_string(),
                        memory_type: MemoryType::NormalMemory,
                        memory_value: "example.com".to_string(),
                        should_autocomplete: false,
                        tooltip: "The domain name for your services".to_string(),
                        value_type: MemoryValueType::Text,
                    }
                ],
            }
        ],
        mob_name: "test-mob".to_string(),
        mob_version: "beta-0.5.2".to_string(),
        theme: Theme::Light,
    };

    // Test JSON serialization
    let json = serde_json::to_string(&mob).unwrap();
    assert!(json.contains("test-mob"));
    assert!(json.contains("example.com"));

    // Test deserialization
    let deserialized: Mob = serde_json::from_str(&json).unwrap();
    assert_eq!(deserialized.mob_name, mob.mob_name);
    assert_eq!(deserialized.mob_manikins.len(), mob.mob_manikins.len());
}

#[test]
fn test_megadocker_state_default() {
    let state = MegaDockerState::default();
    assert_eq!(state.megadocker_version, "beta-0.5.2");
    assert!(matches!(state.theme, Theme::Light));
    assert!(state.manikin_table.is_empty());
    assert!(state.selected_manikins.is_empty());
}