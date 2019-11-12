# CRATE - Create React App with Typescript and Electron

[](#table-of-contents)

## Table of Contents

1. [About CRATE](#about-crate 'Learn about CRATE')
2. [Find and Replace](#find-and-replace-these-values-in-the-entire-project 'How to do your intial setup of the project')
3. [Develop](#how-to-run-in-development-mode 'How to develop in hot-reload mode')
4. [Build Prerequisites](#prerequisites-to-build-some-distributable-installers 'What you need to target specific distribution chanels')
5. [Build for an OS](#how-to-build-distributable-installers-for-specific-platforms 'The commands to build a target for a given OS')
6. [Build for multiple OSes](#how-to-build-distributable-installers-for-multiple-platforms 'The commands to build a target for linux and windows')
7. [Build for all OSes](#how-to-build-distributable-installers-for-all-platforms 'The commands to build a target for all 3 OSes')

[](#about-crate)

## About CRATE

"CRATE is based on a simple idea: You shouldn't have to build a box to put your code into a box. I looked for a boilerplate that did what I wanted for what felt like aeons (but it was actually only a few weeks), and eventually gave up and made one in the name of being more lazy later.

CRATE supports all the features I wanted (you might call it extremely opinionated, verging on bitchy) in a development environment and buildchain. My boilerplate had to be open source from top to bottom, support cross-platform building of distributable applications, allow hot-reloading in the Electron app, be written in as close to pure Typescript as was practical (there is literally one line of vanilla javascript in `preload.js`, and I will get rid of it soon), include all the conveinece management functions as npm scripts that I would ever use regularly, and require the minimum number of keystrokes while still outputting easily readable useful information at the terminal, tell me when it was done building so I could walk away from the build command, have a development environment as similar as possible to the output app experience, have a universal user experience across all 3 desktop OSes, gitignore all the stuff I didn't want to track or think about that was specific to that application, work on all 3 desktop OSes, contain the minimum number of files, use the bare minimum number of dependencies, and just generally be complete enough that all I had to do was clone the repo and start adding my code.

Alright, I realize now looking at my list of requirements that CRATE is both highly opinionated and bitchy (but I'm okay with that, because it does all of those things). CRATE is the best way to build applications I've ever had the pleasure of working with, and I hope you find it useful in your projects." - VirtualEstatePlanner

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#find-and-replace-these-values-in-the-entire-project)

## Find and replace these values in the entire project

To start your project, you should find and replace the following symbols project-wide in VS Code by hitting `crtl-shift-f` _(or `command-shift-f` on macOS)_:

1. `YOUR_GITHUB_USER` => your github username
2. `YOUR_GITHUB_REPO` => your application's github repository name
3. `your-package-name` => your application's npm package name
4. `YOUR_APP_SHORT_NAME` => your application's shortened name
5. `YOUR_PRODUCT_NAME` => your application's human-readable product name
6. `YOUR_APPLICATION_DESCRIPTON` => your application's human-readable short description
7. `YOUR_NAME` => your human name
8. `YOUR_EMAIL_ADDRESS` => your email address

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#how-to-run-in-development-mode)

## How to run in development mode

Then if you don't just want to stare at a spinning box icon on all 3 platforms you should probably develop your project:

1. Run `npm i -g yarn` to install yarn globally
2. Install the `Debugger for Chrome` extension in VSCode.
3. Run `yarn setup` to install dependencies and configure the environment
4. Run `yarn develop` to start
5. _(Optional, but highly recommended)_ Click ![debug-icon](https://github.com/VirtualEstatePlanner/crate/blob/master/README-images/debug-icon.png) and then click this green triangle: ![debug-icon](https://github.com/VirtualEstatePlanner/crate/blob/master/README-images/debug-menu.png)
6. _(Optional, but officially recommended by people who aren't me becuase I like to live dangerously and I am a rolling distro kind of guy)_ Replace all instances of `latest` with actual version numbers in all 3 `package.json` files, unless you like to live dangerously _(or are a rolling-distro kind of guy, gal, or android death machine)_

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#prerequisites-to-build-some-distributable-installers)

## Prerequisites to build some distributable installers

If you are developing on macOS and building executables for Windows (ugh, I know, but you should), install [Docker for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac).

If you are developing on linux and building executables for Windows (ugh, I know, but you still probably should), run `curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh` to install docker-ce on most distros.

If you are developing for deployment on the Mac App Store (because you don't want to be open source about life), find the field in `package.json` located at `"build": { "mac": { "identity": }}` on line 83 and replace the `null` value with your Apple Developer ID.

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#how-to-build-distributable-installers-for-specific-platforms)

### How to build distributable installers for specific platforms

Run `yarn dist-l` to make an executable for linux in the `binaries` directory _(works on any platform)_

Run `yarn dist-m` to make an executable for mac in the `binaries` directory _(only works on macOS)_

Run `yarn dist-w` to make an executable for windows in the `binaries` directory _(only works on windows)_

Run `yarn dist-w-docker` to make an executable for windows in the `binaries` directory _(only works on macOS or linux)_

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#how-to-build-distributable-installers-for-multiple-platforms)

### How to build distributable installers for multiple platforms

1. Make sure the docker daemon is running on macOS or linux
2. Run `yarn dist-most` to make executables for the linux and windows platforms in the `binaries` directory

[TOC](#table-of-contents 'Jump back to the Table of Contents')

[](#how-to-build-distributable-installers-for-all-platforms)

### How to build distributable installers for all platforms

(_only works on macOS_)

1. Own a macOS computer
2. Be very lazy
3. Make sure the docker daemon is running
4. Run `yarn dist-all` to make executables for all platforms in the `binaries` directory
5. Your mac will tell you when it's done

[TOC](#table-of-contents 'Jump back to the Table of Contents')
