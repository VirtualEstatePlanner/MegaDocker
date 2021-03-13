/** @format */

//  getKNetworkMites.ts
//  MegaDocker
//  a function that pulls the Kubernetes network Mites from an array of Mites
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/IMite'

/**
 * updates networkMites array based on application state
 */
export const getKNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `KubernetesNetwork`)
