//  createRemoteSwarm.ts
//  MegaDocker
//  create a swarm on the named remote docker daemon
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { useRemoteDockerDaemon } from '../docker/useRemoteDockerDaemon';
import { createSwarmWithTokens } from './createSwarmWithTokens';

/**
 * create a swarm on the named remote docker daemon
 */
export function createRemoteSwarm(virtualMachine: string): void {
  useRemoteDockerDaemon(virtualMachine);
  createSwarmWithTokens();
  // IMPLEMENT needs a return that states whether or not it succeeded
}
