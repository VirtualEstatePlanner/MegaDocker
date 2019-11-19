//  installModuleVBoxForMac.ts
//  MegaDocker
//  downloads and installs VirtualBox for macOS
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadFolder } from '../../globals/downloadFolder';
import { checkForFile } from '../core/checkForFile';
import { downloadVBoxForMac } from './downloadVBoxForMac';

/**
 * downloads and installs VirtualBox for macOS
 */
export function installModuleVBoxForMac(): void {
  if (checkForFile(downloadFolder, 'VirtualBox.dmg') === false) {
    downloadVBoxForMac();
  }
  if (checkForFile(downloadFolder, 'VirtualBox.dmg') === true) {
    installModuleVBoxForMac();
  }
  // TODO needs a return that states whether or not it succeeded
}
