//  startVBoxVM.ts
//  MegaDocker
//  starts a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine to start
 * starts a VirtualBox VM
 */
export function startVBoxVM(virtualMachine: string): void {
  run('/usr/local/bin/VBoxManage', ['startvm', virtualMachine])
}
