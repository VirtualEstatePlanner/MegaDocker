/** @format */

import { IMite } from './IMite'

//  ITraefikedServiceMite.ts
//  MegaDocker
//  an interface that represents a Mite with a service that sits behind Traefik
//  Created by George Georgulas IV on 3/8/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

/**
 * interface for ITraefikedServiceMite
 * @webInterfaceHostnames an array of strings representing URL hostnames
 */
export interface ITraefikedServiceMite extends IMite {
  type: `DockerSwarmService`
  webInterfaceHostnames: string[]
}
