/** @format */

//  getDNetworkMites.ts
//  MEGADocker
//  a function that pulls the Docker Swarm network Mites from an array of Mites
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/IMite'
import { INetworkMite } from '../../interfaces/INetworkMite'

/**
 * updates networkMites array based on application state
 */
export const getDNetworkMites = (miteArray: IMite[]): INetworkMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmNetwork`) as INetworkMite[]
