//  installModulesForMac.ts
//  MegaDocker
//  downloads and installs Docker and VirtualBox
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { installDockerForMac } from './installDockerForMac';
import { installVBoxForMac } from './installVBoxForMac';

/**
 * downloads and installs Docker and VirtualBox
 */
export function installModulesForMac(): void {
  installDockerForMac();
  installVBoxForMac();
}
