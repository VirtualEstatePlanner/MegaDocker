//  MegaDocker
//  miscellaneous-objects.ts
//  some other objects we care about
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { homedir, tmpdir } from 'os';
import { IManikin } from '../classes/IManikin';
import {
  drupalManikin,
  ghostManikin,
  gitManikin,
  myELKManikin,
  myLDAPManikin,
  nginxManikin,
  owncloudManikin,
  portainerManikin,
  portalManikin,
  rocketChatManikin,
  skoposManikin,
  swarmpitManikin,
  traefikManikin,
  visualizerManikin,
  webdavManikin,
  wordPressManikin
} from './manikins';

// permissions stuff
//
export const hostUserName: string = '';

// important common directories
// universal
export const homeFolder: string = homedir.toString();
export const tempFolder: string = tmpdir.toString();
export const downloadsFolder: string = `${homeFolder.toString()}/Downloads`;
export const documentsFolder: string = `${homeFolder.toString()}/Documents`;
// tslint:disable-next-line: max-line-length
export const userMegaDockerFolder: string = `${documentsFolder.toString()}/MegaDocker`;

export const allManikins: IManikin[] = [
  traefikManikin,
  skoposManikin,
  swarmpitManikin,
  portainerManikin,
  myELKManikin,
  visualizerManikin,
  ghostManikin,
  nginxManikin,
  myLDAPManikin,
  rocketChatManikin,
  drupalManikin,
  owncloudManikin,
  gitManikin,
  portalManikin,
  webdavManikin,
  wordPressManikin
];
// Installer constants
// mac
export const macVirtualBoxInstallerFileName: string =
  'MacOSVirtualBoxInstaller.dmg';
// tslint:disable-next-line: max-line-length
export const macVirtualBoxInstallerFileURL: URL = new URL(
  // tslint:disable-next-line: max-line-length
  'https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-OSX.dmg'
);
export const macDockerBinaryPath: string = '/usr/local/bin/docker';
export const macDockerInstallerFileURL: URL = new URL(
  'https://download.docker.com/mac/stable/Docker.dmg'
);

// windows
export const winVirtualBoxInstallerFileName: string =
  'WindowsVirtualBoxInstaller.exe';
// tslint:disable-next-line: max-line-length
export const winVirtualBoxInstallerFileURL: URL = new URL(
  // tslint:disable-next-line: max-line-length
  'https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-Win.exe'
);
// tslint:disable-next-line: max-line-length
export const winDockerInstallerFileURL: URL = new URL(
  // tslint:disable-next-line: max-line-length
  'https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe'
);

// linux
export const linuxVirtualBoxInstallerFileName: string =
  'LinuxVirtualBoxInstaller.run';
// tslint:disable-next-line: max-line-length
export const linuxVirtualBoxInstallerFileURL: URL = new URL(
  // tslint:disable-next-line: max-line-length
  'https://download.virtualbox.org/virtualbox/6.0.4/VirtualBox-6.0.4-128413-Linux_amd64.run'
);
export const linuxDockerInstallerFileURL: URL = new URL(
  'https://get.docker.com/'
);

// alert reasons
export const dockerInstallationReasonString: string =
  'MegaDocker requires administrative access in order to install Docker.';
export const dockerUninstallationReasonString: string =
  'MegaDocker requires administrative access in order to uninstall Docker.';
export const virtualBoxInstallationReasonString: string =
  'MegaDocker requires administrative access in order to install VirtualBox.';
export const virtualBoxUninstallationReasonString: string =
  'MegaDocker requires administrative access in order to uninstall VirtualBox.';
