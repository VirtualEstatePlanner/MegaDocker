/** @format */

import { IMite } from '../objectInterfaces/IMite'

//  ITraefikedServiceMite.ts
//  MEGADocker
//  an interface that represents a Mite with a service that sits behind Traefik
//  Created by George Georgulas IV on 3/8/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * interface for ITraefikedServiceMite
 * @webInterfaceHostnames an array of strings representing URL hostnames
 */
export interface ITraefikedServiceMite extends IMite {
  type: `DockerSwarmService`
  webInterfaceHostnames: string[]
}
