//  downloadDockerForMac.ts
//  MegaDocker
//  downloads Docker for macOS .dmg file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadFolder } from '../../globals/downloadFolder';
import { macDockerInstallerFileURL } from '../../globals/_globals';
import { getFile } from '../core/getFile';

/**
 * downloads Docker for macOS .dmg file
 */
export async function downloadDockerForMac(): Promise<void> {
  await getFile(downloadFolder, `Docker.dmg`, macDockerInstallerFileURL);
}
