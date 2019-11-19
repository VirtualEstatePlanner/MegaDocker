//  MegaDocker
//  miscellaneous-objects.ts
//  some other objects we care about
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const hostUserName: string = ``;

/**
 * the name of the downloaded mac VirtualBox dmg file
 */
export const macVirtualBoxInstallerFileName: string = `VirtualBox.dmg`;

/**
 * the URL to download the mac VirtualBox dmg from
 */
export const macVirtualBoxInstallerFileURL: string = `https://download.virtualbox.org/virtualbox/6.0.14/VirtualBox-6.0.14-133895-OSX.dmg`;

/**
 * the location of the docker binary on mac
 */
export const macDockerBinaryPath: string = `/usr/local/bin/docker`;

/**
 * the URL to download the mac Docker dmg from
 */
export const macDockerInstallerFileURL: string = `https://download.docker.com/mac/stable/Docker.dmg`;

/**
 * the name of the windows Virtual Box Installer .exe file
 */
export const winVirtualBoxInstallerFileName: string = `VirtualBox.exe`;

/**
 * the url to download the windows VirtualBox Installer .exe from
 */
export const winVirtualBoxInstallerFileURL: string = `https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-Win.exe`;

/**
 * the url to download the Docker for Windows Installer .exe from
 */
export const winDockerInstallerFileURL: string = `https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe`;

/**
 * the name of the linux VirtualBox Installer .run file
 */
export const linuxVirtualBoxInstallerFileName: string = `LinuxVirtualBoxInstaller.run`;

/**
 * the URL to download the linux VirtualBox Installer .run file from
 */
export const linuxVirtualBoxInstallerFileURL: string = `https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-Linux_amd64.run`;

/**
 * the URL for the linux docker install script
 */
export const linuxDockerInstallerFileURL: string = `https://get.docker.com/`;

/**
 * admin privilieges prompt to install Docker
 */
export const dockerInstallationReasonString: string = `MegaDocker requires administrative access in order to install Docker.`;

/**
 * admin privilieges prompt to uninstall Docker
 */
export const dockerUninstallationReasonString: string = `MegaDocker requires administrative access in order to uninstall Docker.`;

/**
 * admin privilieges prompt to install VirtualBox
 */
export const virtualBoxInstallationReasonString: string = `MegaDocker requires administrative access in order to install VirtualBox.`;

/**
 * admin privilieges prompt to uninstall VirtualBox
 */
export const virtualBoxUninstallationReasonString: string = `MegaDocker requires administrative access in order to uninstall VirtualBox.`;
