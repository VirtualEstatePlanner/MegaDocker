//  bridgeNic.ts
//  MegaDocker
//  bridges a nic from a VirtualBox VM to the host
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine we are modifying
 * @nicNumber - the NIC we are bridging to the VM host's NIC
 * bridges a nic from a VirtualBox VM to the host
 */
export function bridgeNic(virtualMachine: string, nicNumber: number): void {
  const bridgedTo: string = 'en0'
  const adapterNumber: string = `${nicNumber}`
  const adaptertobridge: string = `--bridgeadapter.${adapterNumber}`
  run('/usr/local/bin/VBoxManage', [
    'modifyvm',
    virtualMachine,
    adaptertobridge,
    bridgedTo
  ])
}
