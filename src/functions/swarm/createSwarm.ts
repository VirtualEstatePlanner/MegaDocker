//  createSwarm.ts
//  MegaDocker
//  create a swarm on the currently active docker daemon
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * create a swarm on the currently active docker daemon
 */
export function createSwarm(): void {
  run('/usr/local/bin/docker', ['swarm', 'init', '--advertise-addr']);
  // IMPLEMENT needs a return that states whether or not it succeeded
}
