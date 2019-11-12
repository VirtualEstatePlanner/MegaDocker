//  reinstallVBoxForMac.ts
//  MegaDocker
//  reinstalls VirtualBox
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { installVBoxForMac } from './installVBoxForMac';
import { uninstallVBoxForMac } from './uninstallVBoxForMac';

/**
 * reinstalls VirtualBox
 */
export function reinstallVBoxForMac(): void {
  uninstallVBoxForMac();
  installVBoxForMac();
}
