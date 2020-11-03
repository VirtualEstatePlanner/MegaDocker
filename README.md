[//]: # 'README.md'
[//]: # 'MegaDocker'
[//]: # 'a standard github markdown readme file'
[//]: # 'Created by George Georgulas IV on 1/26/19.'
[//]: # 'Copyright © 2019 The MegaDocker Group. All rights reserved.'

# MegaDocker v0.3.2-beta

Modular Enterprise-Grade Automated Docker

## Magically make microservices for the masses

Most recent changes:

- added n8n Manikin for service integration
- removed chuff from old versions
- fixed strictNullChecks issue
- Windows build from macOS works again
- Added NextCloud
- Added LedgerSMB

![alt text](./src/images/icons/icon.png 'MegaDockerLogo')

[](#table-of-contents)

## Table of Contents

[TOC](#table-of-contents 'Jump back to the Table of Contents')

1. [Mites](#mites 'AKA snippets')
2. [Memories](#memories 'AKA Microservice Settings')
3. [Manikins](#manikins 'AKA Microservices')
   1. [Core Manikins](#core-manikins 'AKA Microservices you have to have')
   2. [Included Manikins](#included-manikins 'AKA Microservices we wrote for you')
   3. [Custom Manikins](#custom-manikins 'AKA Microservices you write yourself')
4. [Mobs](#mobs 'AKA docker-compose files')

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

You can also make your own **Mites** and mold them into all manner of **Manikins** to make your **Mobs** mightier.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mites)

## Mites

**Mites** contain snippets of plain text (in the form of [TypeScript](https://www.typescriptlang.org) objects that conform to the `IMite` [interface](https://github.com/VirtualEstatePlanner/MD/blob/master/src/interfaces/IMite.ts) or the `ICustomMite` [interface](https://github.com/VirtualEstatePlanner/MD/blob/master/src/interfaces/ICustomMite.ts)) that contain part of a **Manikin**'s file. This is almost always a snippet of [YAML](https://yaml.org) used to create a **Manikin** in a `pod.yml` or `docker-compose.yml` file, although a **Mite** may contain any kind of snippet necessary to make a required file (such as a `.conf` file) for any application you can think of.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#memories)

## Memories

**Memories** are the choices a user needs to make to configure a **Mob**. **Memories** can contain any kind of data, and their values will modify the output of one or more **Mites** in your **Mob**. For instance, if your **Manikin** needs to know where a volume is on your host to save data, when you add that Manikin to your **Mob**, the _Memories Table_ will add a **Memory** to request the location of that folder. If another **Manikin** in your **Mob** also needs access to that **Memory**, it will automatically have access to that information.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#manikins)

### Manikins

**Manikins** are microservices running in your [Docker](https://www.docker.com) swarm or [Kubernetes](https://kubernetes.io) cluster.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#core-manikins)

#### Core Manikins

MEGADocker **Mobs** require a minimal core of **Manikins** to run services that are necessary for the **Mob** to function. When you generate a new **Mob**, these **Manikins** will already be in it, and their **Memories** will be in the _Memories Table_ waiting for you to populate them.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#included-manikins)

#### Included Manikins

MEGADocker includes Manikins for a number of common uses, and we add more all the time. These **Manikins** are optional, strictly speaking, but you'll probably want a few to do something useful for you.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#custom-manikins)

#### Custom Manikins

While MEGADocker includes many **Manikins**, we can't do everything… yet. If you find that we are missing that one **Manikin** you need, you can write it yourself and build a custom version of MEGADocker for yourself. Of course, we'd love it if you added those **Manikins** to [this repo](https://github.com/VirtualEstatePlanner/MD), but you don't have to. Because MEGADocker is open source, you can look at any of the source code for existing **Manikins** and **Mites** to see how we do it.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#mobs)

### Mobs

**Mobs** represent a full stack of microservices (**Manikins**) deployed across a cluster or swarm of hosts. **Mobs** are saved as a `.zip` filecontaining an entire directory meant to be used in Docker swarm mode.

[TOC](#table-of-contents 'Jump back to the Table of Contents')
