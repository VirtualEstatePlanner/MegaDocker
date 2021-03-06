/** @format */

//  getDServiceMites.ts
//  MEGADocker
//  a function that pulls the Docker Swarm service Mites from an array of Mites
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/objectInterfaces/IMite'

/**
 * updates serviceMites array based on application state
 */
export const getDServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmService`)
