//  dockerPS.ts
//  MegaDocker
//  runs 'docker ps' and returns that information to the
//  calling function as a JSON object or string
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from '../core/run';

/**
 * runs 'docker ps' and returns that information to the
 * calling function as a JSON object or string
 */
export function dockerPS(): string {
  let output = run('/usr/local/bin/docker', ['ps']);
  console.log(output);
  return output as string;
  // IMPLEMENT needs a return of a JSON object, maybe?
}
