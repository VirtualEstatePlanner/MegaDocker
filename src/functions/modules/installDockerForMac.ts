//  installDockerForMac.ts
//  MegaDocker
//  downloads and installs Docker for macOS
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadsFolder } from '../../globals/downloadFolder';
import { checkForFile } from '../core/checkForFile';
import { configureDockerForMac } from '../docker/configureDockerForMac';
import { downloadDockerForMac } from './downloadDockerForMac';

/**
 * downloads and installs Docker for macOS
 */
export function installDockerForMac(): void {
  if (checkForFile(downloadsFolder, 'Docker.dmg') === false) {
    downloadDockerForMac();

    return;
  }
  if (checkForFile(downloadsFolder, 'Docker.dmg') === true) {
    configureDockerForMac();
  }
  // TODO needs a return that states whether or not it succeeded
}
