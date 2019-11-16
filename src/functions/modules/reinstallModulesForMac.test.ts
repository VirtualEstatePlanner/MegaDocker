//  reinstallModulesForMac.ts
//  MegaDocker
//  reinstalls Docker and VirtualBox
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { installModulesForMac } from './installModulesForMac';
import { uninstallModulesForMac } from './uninstallModulesForMac';

/**
 * reinstalls Docker and VirtualBox
 */
export function reinstallModulesForMac(): void {
  uninstallModulesForMac();
  installModulesForMac();
}
