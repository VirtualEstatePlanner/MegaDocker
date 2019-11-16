//  getDockerVersion.ts
//  MegaDocker
//  runs 'docker version' and returns that information
//  to the calling function as a JSON object or string
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * runs 'docker version' and returns that information
 * to the calling function as a JSON object or string
 */
export function getDockerVersion(): void {
  run('/usr/local/bin/docker', ['version']);
  // IMPLEMENT needs a return of just the docker version number as a string
}
