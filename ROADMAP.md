# ROADMAP

## a list of features to be added and tasks to be done by version number

The line in **bold** is the current version

- `v0.1.0-pre-alpha` : Build and distribution framework in place written in pure TypeScript
- `v0.1.5-pre-alpha` : imported `swift`, ported lots of it, marked `TODO` program holes
- `v0.2.0-pre-alpha` : import and translate all `swift` and `javascript` code to `typescript`
- `v0.2.5-pre-alpha` : **add unit tests with Jest**
- `v0.2.7-pre-alpha` : build user interface prototype, start UI
- `v0.3.0-pre-alpha` : passes all unit test, create missing types for other required `node` libraries, add and implement `Manikin` management interface URL (`Portal` Manikin)
- `v0.4.0-pre-alpha` : implement `dockerode`, `fs`, etc. in functions without `run` wherever possible, translate all `shell` to typescript
- `v0.5.0-alpha` : implement `Windows` and `Linux` installation and removal of `Docker` & `VirtualBox` modules
- `v0.6.0-alpha` : add support for `CloudFlare` domains API, add `Manikin` property for management subdomain
- `v0.7.0-alpha` : finish functional user interface, add Skopos support and `skopos-run` Core Manikins, FreeNOM API
- `v0.7.5-beta` : `skopos-run` every `Manikin` except `skopos` itself, add Amazon Web Services API
- `v0.8.0-beta` : add `kubernetes` support, get every applicable `Manikin` running through LDAP, add Digital Ocean API
- `v0.8.5-beta` : create `kubernetes` versions of all `Manikins` and `Mites`, add Google Cloud Provider API, finish all `TODO`s
- `v0.9.0-beta` : clean up documentation, polish UI, write code coverage tests, prepare for crowdfunding and investors
- `v0.9.5-preview` : look for investors, usable by end-user with only minor rough edges
- `v1.0.0` : add altermante Manikin configurations, no rough corners: we open source and announce, begin crowdfunding
