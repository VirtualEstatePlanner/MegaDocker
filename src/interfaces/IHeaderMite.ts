/** @format */

import { IMite } from './IMite'

//  IHeaderMite.ts
//  MEGADocker
//  an interface that represents a Mite with a Docker swarm Network
//  Created by George Georgulas IV on 3/14/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

/**
 * interface for INetworkMite
 */
export interface IHeaderMite extends IMite {
  type: `DockerSwarmHeader`
}
