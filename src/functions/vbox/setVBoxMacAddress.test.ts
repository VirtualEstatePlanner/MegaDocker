//  setVBoxMacAddress.ts
//  MegaDocker
//  changes MAC address of a NIC on a VirtualBox VM to enable
//  DHCP reservations for the VMs
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine to be modified
 * @newMAC - the new MAC address we are setting
 * @adapterNumber - the NIC we are setting the Mac address on
 * changes MAC address of a NIC on a VirtualBox VM to enable
 * DHCP reservations for the VMs
 */
export function setVBoxMacAddress(
  virtualMachine: string,
  newMAC: string,
  adapterNumber: number
): void {
  const nicnumber: string = `${adapterNumber}`
  const nicmacchange: string = `--macaddress ${nicnumber}`
  run('/usr/local/bin/VBoxManage', [
    'modifyvm',
    virtualMachine,
    nicmacchange,
    newMAC
  ])
}
