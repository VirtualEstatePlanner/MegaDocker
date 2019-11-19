//  installVBoxForMac.ts
//  MegaDocker
//  installs VirtualBox for Mac from the .dmg file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadFolder } from '../../globals/downloadFolder';
import { checkForFile } from '../core/checkForFile';
import { runOrdered } from '../core/runOrdered';
import { runPrivilegedOrdered } from '../core/runPrivilegedOrdered';
/**
 * installs VirtualBox for Mac from the .dmg file
 */
export function installVBoxForMac(): void {
  if (checkForFile(downloadFolder, 'VirtualBox.dmg') === true) {
    runPrivilegedOrdered('/usr/bin/hdiutil', ['attach', '/tmp/VirtualBox.dmg']);
    runOrdered(`sleep(30)`);
    runPrivilegedOrdered('/usr/sbin/installer', [
      '-pkg',
      '/Volumes/VirtualBox/VirtualBox.pkg',
      '-target',
      '/'
    ]);
    runOrdered(`sleep(30)`);
    runPrivilegedOrdered('/usr/sbin/diskutil', [
      'eject',
      '/Volumes/VirtualBox'
    ]);
    // TODO needs a return that states whether or not it succeeded
  }
}
