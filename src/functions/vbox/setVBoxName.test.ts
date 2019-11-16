//  setVBoxName.ts
//  MegaDocker
//  renames a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine to rename
 * @newName - the name to be assigned to that virtual machine
 * renames a VirtualBox VM
 */
export function setVBoxName(virtualMachine: string, newName: string): void {
  run('/usr/local/bin/VBoxManage', ['modifyvm', virtualMachine, newName])
}
