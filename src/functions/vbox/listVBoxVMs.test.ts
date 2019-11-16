//  listVBoxVMs.ts
//  MegaDocker
//  returns an array of the names of VMs running in VirtualBox
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * returns an array of the names of VMs running in VirtualBox
 */
export function listVBoxVMs(): string {
  run('/usr/local/bin/VBoxManage', ['list', 'vms'])

  return 'make this function do it\'s job'
}
