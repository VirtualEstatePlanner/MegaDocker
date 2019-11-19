//  MegaDocker
//  miscellaneous-objects.ts
//  some other objects we care about
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const hostUserName: string = ``;

// Installer constants
// mac
export const macVirtualBoxInstallerFileName: string =
  'MacOSVirtualBoxInstaller.dmg';
export const macVirtualBoxInstallerFileURL: string =
  'https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-OSX.dmg';
export const macDockerBinaryPath: string = '/usr/local/bin/docker';

export const macDockerInstallerFileURL: string =
  'https://download.docker.com/mac/stable/Docker.dmg';

// windows
export const winVirtualBoxInstallerFileName: string =
  'WindowsVirtualBoxInstaller.exe';
export const winVirtualBoxInstallerFileURL: string =
  'https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-Win.exe';
export const winDockerInstallerFileURL: string =
  'https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe';

// linux
export const linuxVirtualBoxInstallerFileName: string =
  'LinuxVirtualBoxInstaller.run';
export const linuxVirtualBoxInstallerFileURL: string =
  'https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-Linux_amd64.run';

export const linuxDockerInstallerFileURL: string = 'https://get.docker.com/';

// alert reasons
export const dockerInstallationReasonString: string =
  'MegaDocker requires administrative access in order to install Docker.';
export const dockerUninstallationReasonString: string =
  'MegaDocker requires administrative access in order to uninstall Docker.';
export const virtualBoxInstallationReasonString: string =
  'MegaDocker requires administrative access in order to install VirtualBox.';
export const virtualBoxUninstallationReasonString: string =
  'MegaDocker requires administrative access in order to uninstall VirtualBox.';
