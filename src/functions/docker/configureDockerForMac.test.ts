//  configureDockerForMac.ts
//  MegaDocker
//  copys Docker to /Applications, adds current user to docker group on macOS
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { downloadsFolder } from '../../globals/downloadFolder';
import { hostUserName } from '../../globals/_globals';
import { checkForFile } from '../core/checkForFile';
import { runOrdered } from '../core/runOrdered';
import { runPrivilegedOrdered } from '../core/runPrivilegedOrdered';

/**
 * copys Docker to /Applications, adds current user to docker group on macOS
 */
export function configureDockerForMac(): void {
  if (checkForFile(downloadsFolder, 'Docker.dmg')) {
    runOrdered('/usr/bin/hdiutil', [
      'attach',
      '-nobrowse',
      `${downloadsFolder}/Docker.dmg`
    ]);
    runOrdered('/usr/bin/rsync', [
      '-qaE',
      '/Volumes/Docker/Docker.app',
      '/Applications'
    ]);
    runOrdered('/usr/bin/open', ['--background', '-a', 'Docker']);
    runOrdered(`sleep(10)`);
    runOrdered('/usr/sbin/dseditgroup', [
      '-o',
      'edit',
      '-d',
      `${hostUserName}`,
      '-t',
      'user',
      'docker'
    ]);
    runPrivilegedOrdered('/usr/sbin/dseditgroup', [
      '-o',
      'edit',
      '-a',
      `${hostUserName}`,
      '-t',
      'user',
      'docker'
    ]);
    runOrdered('/usr/sbin/diskutil', ['eject', '/Volumes/Docker']);
    // IMPLEMENT needs a return that states whether or not it succeeded
  }
}
