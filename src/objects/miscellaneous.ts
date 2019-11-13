//  MegaDocker
//  miscellaneous-objects.ts
//  some other objects we care about
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

// tslint:disable: max-line-length
import { homedir, tmpdir } from 'os';
import {
  drupalManikin,
  ghostManikin,
  gitManikin,
  myELKManikin,
  nginxManikin,
  owncloudManikin,
  portainerManikin,
  portalManikin,
  rocketChatManikin,
  visualizerManikin,
  webdavManikin,
  wordPressManikin
} from './manikins';

import { IManikin } from '../classes/IManikin';
import { IManikinVariable } from '../classes/IManikinVariable';
import { IMite } from '../classes/IMite';
import { IMob, coreMob } from '../classes/IMob';

import {
  cloudFlareAPIKey,
  cloudFlareEmail,
  letsEncryptEmail,
  primaryDomain,
  secondaryDomain
} from '../mobparts/variables/_manikinvariable-template';
import {
  myLDAPManikin,
  skoposManikin,
  traefikManikin,
  swarmpitManikin
} from './manikins';

export let userManikins: IManikin[] = [
  myLDAPManikin,
  traefikManikin,
  skoposManikin
];

export let userVariables: IManikinVariable[] = [
  primaryDomain,
  secondaryDomain,
  cloudFlareAPIKey,
  cloudFlareEmail,
  letsEncryptEmail
];

const userMobMites: IMite[] = [];
const myYMLOutputString: string = userMobMites.concat.toString();

export let userMob: IMob = {
  mobManikins: userManikins,
  mobName: 'unnamed Mob',
  mobVariables: [emptyManikinVariable]
};

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
