//  createLocalSwarm.ts
//  MegaDocker
//  create a swarm on the local docker daemon
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { useLocalDockerDaemon } from '../docker/useLocalDockerDaemon';
import { createSwarm } from '../docker-swarm/createSwarm';

/**
 * create a swarm on the local docker daemon
 */
export function createLocalSwarm(): void {
  useLocalDockerDaemon();
  createSwarm();
  // IMPLEMENT needs a return that states whether or not it succeeded
}
