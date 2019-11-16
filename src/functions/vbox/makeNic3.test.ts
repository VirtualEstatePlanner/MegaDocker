//  makeNic3
//  MegaDocker
//  creates a bridged NIC on a VirtualBox virtual machine
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { bridgeNic } from './bridgeNic'
import { makeNicPromiscuous } from './makeNicPromiscuous'
import { setVBoxMacAddress } from './setVBoxMacAddress'
import { setNicType } from './setVBoxNicType'

/**
 * @virtualMachine - the VirtualBox virtual machine we are modifying
 * @newMAC - the MAC address we are setting on the NIC
 * @nicNumber - the NIC we are setting to promiscuous mode
 * creates a bridged NIC on a VirtualBox virtual machine
 */
export function makeNic3(
  virtualMachine: string,
  newMAC: string,
  nicNumber: number
): void {
  setNicType(virtualMachine, nicNumber)
  bridgeNic(virtualMachine, nicNumber)
  makeNicPromiscuous(virtualMachine, nicNumber)
  setVBoxMacAddress(virtualMachine, newMAC, nicNumber)
}
