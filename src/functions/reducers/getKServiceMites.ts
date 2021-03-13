/** @format */

//  getKServiceMites.ts
//  MegaDocker
//  a function that pulls the Kubernetes service Mites from an array of Mites
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/IMite'

/**
 * updates serviceMites array based on application state
 */
export const getKServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `KubernetesService`)
