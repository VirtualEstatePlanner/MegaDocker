//  stopMob.ts
//  MegaDocker
//  stops a running Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * @mobName - the Mob to be stopped
 * stops a running Mob
 */
export function stopMob(mobName: string): void {
  run('/usr/local/bin/docker', ['stack', 'remove', mobName]);
}
