//  addMobFolderToVM.ts
//  MegaDocker
//  shares the mob's data storage folder by mounting it from the host to a VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { homedir } from 'os'
import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox VM to be modified
 * @mobName - the name of the Mob folder to share with the VM
 * shares the mob's data storage folder by mounting it from the host to a VM
 */
export function addMobFolderToVM(
  virtualMachine: string,
  mobName: string
): void {
  run('/usr/local/bin/VBoxManage', [
    'sharedfolder',
    'add',
    virtualMachine,
    '--name',
    mobName,
    '--hostpath',
    `${homedir}/Documents/MegaDocker/${mobName}`,
    '--automount'
  ])
}
