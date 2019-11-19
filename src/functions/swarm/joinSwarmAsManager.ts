//  joinSwarmAsManager.ts
//  MegaDocker
//  join the currently selected docker daemon to the swarm
//  described by the token as a manager
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';
import { useRemoteDockerDaemon } from '../docker/useRemoteDockerDaemon';

/**
 * @virtualMachine - string describing the VM to join the swarm
 * @token - string containing the manager token for that swarm
 * join the currently selected docker daemon to the swarm
 * described by the token as a manager
 */
export function joinSwarmAsManager(
  virtualMachine: string,
  token: string
): void {
  useRemoteDockerDaemon(virtualMachine);
  run('/usr/local/bin/docker', ['swarm', 'join', '--token', token]);
  // TODO needs a return that states whether or not it succeeded
  // probably has serious issues with joining local docker demon
}
