//  uninstallDockerForMac.ts
//  MegaDocker
//  uninstalls Docker for macOS
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { runPrivilegedOrdered } from '../core/runPrivilegedOrdered';

/**
 * uninstalls Docker for macOS
 */
export function uninstallDockerForMac(): void {
  runPrivilegedOrdered('/usr/bin/killall', ['docker']);
  runPrivilegedOrdered('/bin/rm', ['-rf', '/Applications/Docker*']);
  runPrivilegedOrdered('/bin/rm', ['-rf', '$HOME/.docker']);
  runPrivilegedOrdered('/bin/rm', [
    '-rf',
    '$HOME/Library/Containers/com.docker.*'
  ]);
  runPrivilegedOrdered('/bin/rm', ['-f', '/usr/local/bin/docker']);
  runPrivilegedOrdered('/bin/rm', ['-f', '/usr/local/bin/docker-machine']);
  runPrivilegedOrdered('/bin/rm', ['-f', '/usr/local/bin/docker-compose']);
  runPrivilegedOrdered('/bin/rm', [
    '-f',
    '/usr/local/bin/docker-credential-osxkeychain'
  ]);
  // IMPLEMENT needs a return that states whether or not it succeeded
  // probably REPLACE with deleteFile commands
}
