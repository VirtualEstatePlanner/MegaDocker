//  createSwarmWithTokens.ts
//  MegaDocker
//  creates a docker swarm and returns manager and worker
//  tokens as a string[] with 2 members
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { createSwarm } from './createSwarm';
import { getSwarmToken } from './getSwarmToken';

/**
 * creates a docker swarm and returns manager and worker
 * tokens as a string[] with 2 members
 */
export function createSwarmWithTokens(): [string, string] {
  createSwarm();
  const tokenManager: string = getSwarmToken(true);
  const tokenWorker: string = getSwarmToken(false);

  return [tokenManager, tokenWorker];
}
