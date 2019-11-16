//  getVBoxVMIP.ts
//  MegaDocker
//  returns the IP address om the local network of a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run'

/**
 * @virtualMachine - the VirtualBox virtual machine we want the IP address of
 * returns the IP address om the local network of a VirtualBox VM
 */
export function getVBoxVMIP(virtualMachine: string): void {
  run('/usr/local/bin/VBoxManage', [
    'guestproperty',
    'enumerate',
    virtualMachine,
    '|',
    'grep',
    'IP',
    '|',
    'sed',
    '4d',
    '|',
    'sed',
    '1,2d',
    '|',
    'sed',
    '\'s/^[^:]*:// g\'',
    '|',
    'sed',
    '\'s/^[^:]*:// g\'',
    '|',
    'sed',
    '\'s/[,].*$// \'',
    '|',
    'sed',
    '\'s/^.// \''
  ])
}
