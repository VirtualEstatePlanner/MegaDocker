//  hasHostOnlyIFs.ts
//  MegaDocker
//  checks a Virtualbox VM for host-only network interfaces
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * checks a Virtualbox VM for host-only network interfaces
 */
export function hasHostOnlyIFs(): boolean {
  run('/usr/local/bin/VBoxManage', ['list', 'hostonlyifs'])

  // IMPLEMENT needs logic to determine what to return
  return true
}
