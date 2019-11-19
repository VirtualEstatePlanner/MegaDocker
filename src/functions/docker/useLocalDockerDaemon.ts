//  useLocalDockerDaemon.ts
//  MegaDocker
//  tell the docker client on this host to connect to a remote docker daemon
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * tell the docker client on this host to connect to a remote docker daemon
 */
export function useLocalDockerDaemon(): void {
  run('/usr/local/bin/docker', ['eval', '$(docker-machine env -u)']);
  // TODO needs a return that states whether or not it succeeded
}
