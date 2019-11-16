//  makeNicPromiscuous.ts
//  MegaDocker
//  sets a NIC on a VirtualBox VM to promiscuous mode to
//  enable NIC bridging and DNS resolution
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine we are modifying
 * @nicNumber - the NIC we are setting to promiscuous mode
 * sets a NIC on a VirtualBox VM to promiscuous mode to
 * enable NIC bridging and DNS resolution
 */
export function makeNicPromiscuous(
  virtualMachine: string,
  nicNumber: number
): boolean {
  const adapterNumber: string = `${nicNumber}`
  const nicpromiscvariable: string = `--nicpromisc ${adapterNumber}`
  run('/usr/local/bin/VBoxManage', [
    'modifyvm',
    virtualMachine,
    nicpromiscvariable,
    'allow-all'
  ])

  return true
}
