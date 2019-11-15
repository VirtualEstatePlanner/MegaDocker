//  detectOS.ts
//  megadocker
//  detects operating system and CPU architecture to enable
//  platform-specific implementations
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { arch, type } from 'os';

/**
 * @param operatingSystem: string describing the host machine's OS type
 * @param hostArchitecture: string describing the host machine's
 * CPU architecture
 * detects operating system and CPU architecture to enable
 * platform-specific implementations
 */
export function detectOS(): [string, string] {
  const operatingSystem: string = type();
  const hostArchitecture: string = arch();

  return [operatingSystem, hostArchitecture];
}
