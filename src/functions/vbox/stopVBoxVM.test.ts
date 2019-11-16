//  stopVBoxVM.ts
//  MegaDocker
//  stops a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine to be stopped
 * stops a VirtualBox VM
 */
export function stopVBoxVM(virtualMachine: string): void {
  run('/usr/local/bin/VBoxManage', ['stopvm', virtualMachine])
}
