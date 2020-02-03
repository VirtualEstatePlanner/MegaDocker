//  downloadVBoxForMac.ts
//  MegaDocker
//  downloads VirtualBox for macOS .dmg
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadFolder } from '../../globals/downloadFolder';
import { macVirtualBoxInstallerFileURL } from '../../globals/_globals';
import { getFile } from '../core/getFile';

/**
 * downloads VirtualBox for macOS .dmg
 */
export async function downloadVBoxForMac(): Promise<void> {
  // console.log(`downloading VirtualBox.dmg`);
  await getFile(
    downloadFolder,
    `VirtualBox.dmg`,
    macVirtualBoxInstallerFileURL
  );
}
