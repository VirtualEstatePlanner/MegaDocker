//  MegaDocker
//  miscellaneous-objects.ts
//  some other objects we care about
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

// tslint:disable: max-line-length

//import libraries
import { homedir, tmpdir } from 'os';

// import classes
import { IManikin } from '../classes/IManikin';
import { IMemory } from '../classes/IMemory';
import { IMite } from '../classes/IMite';
import { IMob } from '../classes/IMob';

// import manikins
import { drupalManikin } from '../mobparts/manikins/drupal';
import { ghostManikin } from '../mobparts/manikins/ghost';
import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { elkManikin } from '../mobparts/manikins/elk';
import { ldapManikin } from '../mobparts/manikins/ldap';
import { nginxManikin } from '../mobparts/manikins/nginx';
import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { portalManikin } from '../mobparts/manikins/portal';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { skoposManikin } from '../mobparts/manikins/skopos';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';

// import memories
import { mobName } from '../mobparts/memories/mobName';

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
  elkManikin,
  visualizerManikin,
  ghostManikin,
  nginxManikin,
  ldapManikin,
  rocketchatManikin,
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
