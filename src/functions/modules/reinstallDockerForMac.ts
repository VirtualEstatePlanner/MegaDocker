//  reinstallDockerForMac.ts
//  MegaDocker
//  reinstalls Docker
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { installDockerForMac } from './installDockerForMac';
import { uninstallDockerForMac } from './uninstallDockerForMac';

/**
 * reinstalls Docker
 */
export function reinstallDockerForMac(): void {
  uninstallDockerForMac();
  installDockerForMac();
}
