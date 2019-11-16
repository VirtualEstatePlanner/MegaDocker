//  removeVBoxHostOnlyAdapters.ts
//  MegaDocker
//  remove all host-only adapters from VirtualBox host
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { runPrivileged } from '../core/runPrivileged'
import { hasHostOnlyIFs } from './hasHostOnlyIFs'

/**
 * remove all host-only adapters from VirtualBox host
 */
export function removeVBoxHostOnlyAdapters(): void {
  if (hasHostOnlyIFs()) {
    runPrivileged('/usr/local/bin/VBoxManage', [
      'hostonlyif',
      'remove',
      'VBoxnet0'
    ])
    runPrivileged('/usr/local/bin/VBoxManage', [
      'hostonlyif',
      'remove',
      'VBoxnet1'
    ])
    runPrivileged('/usr/local/bin/VBoxManage', [
      'hostonlyif',
      'remove',
      'VBoxnet2'
    ])
    runPrivileged('/usr/local/bin/VBoxManage', [
      'hostonlyif',
      'remove',
      'VBoxnet3'
    ])
    runPrivileged('/usr/local/bin/VBoxManage', [
      'hostonlyif',
      'remove',
      'VBoxnet4'
    ])
  }
}
