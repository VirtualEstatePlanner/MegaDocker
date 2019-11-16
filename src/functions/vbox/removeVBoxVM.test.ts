//  removeVBoxVM.ts
//  MegaDocker
//  deletes a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine to be removed
 * deletes a VirtualBox VM
 */
export function removeVBoxVM(virtualMachine: string): boolean {
  run('/usr/local/bin/VBoxManage', ['removevm', virtualMachine])

  return true
}
