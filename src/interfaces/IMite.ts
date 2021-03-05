/** @format */

//  IMite.ts
//  MegaDocker
//  an interface that represents a Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

/**
 * interface for IMite
 * @type which type of IMite this IMite is
 * @miteIndex uniquie identifier for this IMite
 * @miteString the IMite's data
 */
export interface IMite {
  type: `DockerSwarmNetwork` | `DockerSwarmService` | `KubernetesService` | `KubernetesNetwork` | `Custom`
  miteIndex: number
  miteString: string
}
