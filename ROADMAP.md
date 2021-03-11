# ROADMAP

## a list of features to be added and tasks to be done by version number

The line in **bold** is the approximate current version

- `v0.1.0-alpha` : Build and distribution framework in place written in pure `TypeScript`
- `v0.1.5-alpha` : imported `swift`, ported lots of it, marked `TODO` program holes
- `v0.2.0-alpha` : import and translate all `swift` and `javascript` code to `typescript`
- `v0.2.5-alpha` : build user interface prototype, start UI
- `v0.3.0-beta` : create missing types for other required `node` libraries, add and implement `Portal` Manikin
- **`v0.4.0-beta`** : implement `dockerode`, `fs`, etc. in functions without `run` wherever possible, translate all `shell` to `TypeScript`
- `v0.5.0-beta` : implement installation, operation, and removal of `Docker` & `VirtualBox` modules
- `v0.6.0-beta` : add support for `CloudFlare` domains API, add `Manikin` property for management subdomain
- `v0.7.0-beta` : polish UI, add `Gitlab CI` support and use it for Core Manikins
- `v0.7.5-public-beta` : run every `Manikin` through `GitlabCI` except `GitLab` itself, add Amazon Web Services API
- `v0.8.0-public-beta` : add `kubernetes` support, get every applicable `Manikin` authenticated through `LDAP`, add Digital Ocean API
- `v0.8.5-public-beta` : finish all `TODO` items
- `v0.9.0-public-beta` : clean up documentation, polish UI
- `v0.9.5-preview` : usable by end-user with only minor rough edges
- `v1.0.0` : add alternate Manikin configurations, no rough corners
