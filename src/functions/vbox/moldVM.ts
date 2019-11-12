//  moldVM.ts
//  MegaDocker
//  convenience function that configures a VirtualBox VM as a docker-machine
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { addMobFolderToVM } from './addMobFolderToVM'
import { makeNic3 } from './makeNic3'
import { makeNicPromiscuous } from './makeNicPromiscuous'
import { setVBoxMemory } from './setVBoxMemory'
import { startVBoxVM } from './startVBoxVM'
import { stopVBoxVM } from './stopVBoxVM'

/**
 * @virtualMachine - the VirtualBox virtual machine we are modifying
 * @memory - the amount of memory to be assigned to that VM in megabytes
 * @newMAC - the MAC address we are setting on the NIC
 * @mobName - the name of the Mob folder to share with the VM
 * convenience function that configures a VirtualBox VM as a docker-machine
 */
export function moldVM(
  virtualMachine: string,
  mobName: string,
  newMAC: string,
  memory: number
): void {
  stopVBoxVM(virtualMachine)
  addMobFolderToVM(virtualMachine, mobName)
  makeNicPromiscuous(virtualMachine, 1)
  makeNicPromiscuous(virtualMachine, 2)
  makeNic3(virtualMachine, newMAC, 3)
  setVBoxMemory(virtualMachine, memory)
  startVBoxVM(virtualMachine)
}
