//  downloadVBoxForMac.ts
//  MegaDocker
//  downloads VirtualBox for macOS .dmg
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadsFolder } from '../../globals/downloadFolder';
import { macVirtualBoxInstallerFileURL } from '../../globals/_globals';
import { getFile } from '../core/getFile';

/**
 * downloads VirtualBox for macOS .dmg
 */
export function downloadVBoxForMac(): void {
  getFile(downloadsFolder, `VirtualBox.dmg`, macVirtualBoxInstallerFileURL);
}
