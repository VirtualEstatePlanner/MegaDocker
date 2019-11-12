//  reinstallModuleVBoxForMac.ts
//  MegaDocker
//  reinstalls VirtualBox for macOS
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { installModuleVBoxForMac } from './installModuleVBoxForMac';
import { uninstallModuleVBoxForMac } from './uninstallModuleVBoxForMac';

/**
 * reinstalls VirtualBox for macOS
 */
export function reinstallModuleVBoxForMac(): void {
  uninstallModuleVBoxForMac();
  installModuleVBoxForMac();
}
