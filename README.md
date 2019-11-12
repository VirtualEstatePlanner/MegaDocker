[//]: # 'README.md'
[//]: # 'MegaDocker'
[//]: # 'a standard github markdown readme file'
[//]: # 'Created by George Georgulas IV on 1/26/19.'
[//]: # 'Copyright © 2019 The MegaDocker Group. All rights reserved.'

# MegaDocker v0.2.3

## Magically makes microservices for the masses

Most recent change:
rebuilt and fixed buildchain, simplified package.json scripts

![alt text](./src/images/icons/icon.png 'MegaDockerLogo')

[](#table-of-contents)

## Table of Contents

[](#mites)
[](#memories)
[](#manikins)
[](#included-manikins)
[](#mobs)
[TOC](#table-of-contents 'Jump back to the Table of Contents')

1. [About MEGADocker](#about-megadocker 'Learn about MEGADocker')
2. [Mites](#mites 'AKA snippets')
3. [Memories](#memories 'AKA Microservice Settings')
4. [Manikins](#manikins 'AKA Microservices')
   1. [Included Manikins](#included-manikins 'AKA Microservices we wrote for you')
   2. [Custom Manikins](#custom-manikins 'AKA Microservices you write yourself')
5. [Mobs](#mobs 'AKA docker-compose files')

[](#about-megadocker)

## About MEGADocker

"MEGADocker is the ultimate in lazy microservices deployment." - VirtualEstatePlanner

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mites-manikins-memories-and-mobs)

## Mites, Manikins, Memories, and Mobs

MEGADocker uses 4 fundamental building blocks:

**_Mobs_**: an armada of manikins running around doing your bidding, which are composed of **_Manikins_**: little wooden dolls that want do your bidding, which are composed of: **_Mites_**: magical doodads that bring a manikin to life to do your bidding, and **_Memories_**: how a manikin remembers what your bidding is.

You'll use MEGADocker to create your Mob of Manikins. We'll handle the Mites, and tell you what Memories they need. Then you give them their Memories and tell them to March out and do your bidding.

You can also write your own Mites and use them to make custom Manikins and add them to your Mobs.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mites)

## Mites

**Mites** represent snippets of text files (represented as [TypeScript](https://www.typescriptlang.org) objects, usually of type `ServiceMite` or `NetworkMite`, both of which inherit from type `Mite`) that contain part of a **Manikin**. This is almost always a snippet of [YAML](https://yaml.org) (we prefer the .yml extension) used to create a **Manikin** in a `docker-compose.yml` file, although a **Mite** can contain any kind of snippet necessary to make a configuration file for any application you can think of.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#memories)

## Memories

**Memories** represent the choices a user needs to make to configure a **Mob**. **Memories** can contain any kind of data, and their values will modify the output of a **Mite** (or of multiple **Mites**) in your **Mob**. For instance, if your **Manikin** needs to know where a volume is on your host to save data, when you add that Manikin to your **Mob**, the **Memories** table will add a row to request the location of that folder. If another **Manikin** also needs access to that **Memory\*\***, it will automatically have that information.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#manikins)

### Manikins

**Manikins** represent a given microservice running in your [Docker](https://www.docker.com) swarm or [Kubernetes](https://kubernetes.io) cluster.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#included-manikins)

#### Included Manikins

MEGADocker includes Manikins for a number of common uses, and we add more all the time.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#custom-manikins)

#### Custom Manikins

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mobs)

### Mobs

[TOC](#table-of-contents 'Jump back to the Table of Contents')
