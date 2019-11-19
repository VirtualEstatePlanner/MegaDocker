//  useRemoteDockerDaemon.ts
//  MegaDocker
//  tell the docker client on this host to use the
//  remote docker daemon running on a VirtualBox VM
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * @virtualMachine - the VM to connect to
 * tell the docker client on this host to use the
 * remote docker daemon running on a VirtualBox VM
 */
export function useRemoteDockerDaemon(virtualMachine: string): void {
  run('/usr/local/bin/docker', [
    'eval',
    'docker-machine',
    'env',
    virtualMachine
  ]);
  // TODO needs a return that states whether or not it succeeded
}
