//  joinVMToVBoxGroup
//  MegaDocker
//  joins a VirtulaBox VM to a group for easy management in the VirtualBox GUI
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine we are modifying
 * @virtualMachineGroup - the VirtualBox VM group we are that virtual machine to
 * joins a VirtulaBox VM to a group for easy management in the VirtualBox GUI
 */
export function joinVMToVBoxGroup(
  virtualMachineName: string,
  virtualMachineGroup: string
): void {
  run('/usr/local/bin/VBoxManage', [
    'modifyvm',
    virtualMachineName,
    virtualMachineGroup
  ])
}
