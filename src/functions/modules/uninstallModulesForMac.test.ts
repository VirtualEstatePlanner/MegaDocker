//  uninstallModulesForMac.ts
//  MegaDocker
//  uninstalls Docker and VirtualBox
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { uninstallDockerForMac } from './uninstallDockerForMac';
import { uninstallModuleVBoxForMac } from './uninstallModuleVBoxForMac';

/**`
 * uninstalls Docker and VirtualBox
 */
export function uninstallModulesForMac(): void {
  uninstallDockerForMac();
  uninstallModuleVBoxForMac();
}
