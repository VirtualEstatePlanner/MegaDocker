//  downloadVBoxForMac.ts
//  MegaDocker
//  downloads VirtualBox for macOS .dmg
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { runPrivileged } from '../core/runPrivileged';
// tslint:disable-next-line: max-line-length
import { removeVBoxHostOnlyAdapters } from '../vbox/removeVBoxHostAdapters';

/**
 * uninstalls VirtualBox for macOS
 */
export function uninstallModuleVBoxForMac(): void {
  removeVBoxHostOnlyAdapters();
  runPrivileged('src/shells/removeMacVBox.sh', [' ']);
  // IMPLEMENT needs a return that states whether or not it succeeded
}
