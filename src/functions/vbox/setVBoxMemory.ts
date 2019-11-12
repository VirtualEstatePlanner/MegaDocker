//  setVBoxMemory.ts
//  MegaDocker
//  changes the amount of memory assigned to a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine to rename
 * @memory - the amount of memory to be assigned to that VM in megabytes
 * changes the amount of memory assigned to a VirtualBox VM
 */
export function setVBoxMemory(virtualMachine: string, memory: number): void {
  run('/usr/local/bin/VBoxManage', [
    'modifyvm',
    virtualMachine,
    memory.valueOf.toString()
  ])
}
