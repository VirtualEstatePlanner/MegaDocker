//  dockerStackPS.ts
//  MegaDocker
//  runs 'docker stack ps' and returns that information to the
//  calling function as a JSON object or string
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * @mobName - a string referencing the name of the docker stack to be inspected
 * runs 'docker stack ps' and returns that information to the
 * calling function as a JSON object or string
 */
export function dockerStackPS(mobName: string): void {
  run('/usr/local/bin/docker', ['stack', mobName, 'ps']);
  // IMPLEMENT needs a return of a JSON object, maybe?
  // UNSURE whether we need this data for application
  // functionality, or if user needs swarmpit
}
