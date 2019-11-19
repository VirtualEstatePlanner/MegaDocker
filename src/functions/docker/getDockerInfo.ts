//  getDockerInfo.ts
//  MegaDocker
//  runs 'docker info' and returns that information to
//  the calling function as a JSON object or string
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * runs 'docker info' and returns that information to the
 * calling function as a JSON object or string
 */
export function getDockerInfo(): void {
  run('/usr/local/bin/docker', ['info']);
  // TODO needs a return of docker info as a JSON object, probably
}
