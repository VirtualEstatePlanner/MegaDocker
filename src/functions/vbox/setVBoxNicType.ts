//  setNicType.ts
//  MegaDocker
//  changes virtual hardware type of a NIC on a VirtualBox
//  VM because the default VirtualBox NIC driver is trash
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - string referencing the VM name
 * @adapterNumber - a number that represents the NIC on the VM
 * we are changing the type of
 * changes virtual hardware type of a NIC on a VirtualBox VM
 * because the default VirtualBox NIC driver is trash
 */
export function setNicType(
  virtualMachine: string,
  adapterNumber: number
): void {
  const nicnumber: string = `${adapterNumber}`
  const nictypechange: string = `--nicpromisc ${nicnumber}`
  const adapterModel: string = '82540EM'
  run('/usr/local/bin/VBoxManage', [
    'modifyvm',
    virtualMachine,
    nictypechange,
    adapterModel
  ])
}
