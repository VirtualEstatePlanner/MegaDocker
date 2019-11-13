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
  gitlabManikin,
  myELKManikin,
  nginxManikin,
  owncloudManikin,
  portainerManikin,
  portalManikin,
  rocketChatManikin,
  visualizerManikin,
  webdavManikin,
  wordpressManikin
} from '../mobparts/manikins/_manikins';

import { IManikin } from '../classes/IManikin';
import { IMemory } from '../classes/IMemory';
import { IMite } from '../classes/IMite';
import { IMob } from '../classes/IMob';

import { cloudflareAPIKey } from '../mobparts/memories/cloudflareAPIKey';
import { cloudflareEmail } from '../mobparts/memories/cloudflareEmail';
import { letsEncryptEmail } from '../mobparts/memories/letsEncryptEmail';
import { ldapAdminPassword } from '../mobparts/memories/ldapAdminPassword';
import { ldapAdminUsername } from '../mobparts/memories/ldapAdminUsername';
import { ldapConfigurationPassword } from '../mobparts/memories/ldapConfigurationPassword';
import { mobName } from '../mobparts/memories/mobName';
import { primaryDomain } from '../mobparts/memories/primaryDomain';
import { secondaryDomain } from '../mobparts/memories/secondaryDomain';
import {
  ldapManikin,
  skoposManikin,
  traefikManikin,
  swarmpitManikin
} from '../mobparts/manikins/_manikins';

export let coreManikins: IManikin[] = [
  ldapManikin,
  traefikManikin,
  skoposManikin
];

const userMobMites: IMite[] = [];

export let myYMLOutputString: string = userMobMites.concat.toString();
export let userMemories: IMemory[];
export let userMob: IMob = {
  mobManikins: [...coreManikins],
  mobName: mobName.value,
  mobMemories: []
};

// permissions stuff
export const hostUserName: string = '';

// important common directories
export const homeFolder: string = homedir.toString();
export const tempFolder: string = tmpdir.toString();
export const downloadsFolder: string = `${homeFolder.toString()}/Downloads`;
export const documentsFolder: string = `${homeFolder.toString()}/Documents`;
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
  ldapManikin,
  rocketChatManikin,
  drupalManikin,
  owncloudManikin,
  gitlabManikin,
  portalManikin,
  webdavManikin,
  wordpressManikin
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
