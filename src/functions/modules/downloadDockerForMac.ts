//  downloadDockerForMac.ts
//  MegaDocker
//  downloads Docker for macOS .dmg file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadsFolder } from '../../globals/downloadFolder';
import { macDockerInstallerFileURL } from '../../globals/_globals';
import { getFile } from '../core/getFile';

/**
 * downloads Docker for macOS .dmg file
 */
export function downloadDockerForMac(): void {
  // use node library for file downloading
  getFile(downloadsFolder, `Docker.dmg`, macDockerInstallerFileURL);

  // IMPLEMENT needs a return that states whether or not it succeeded
}
