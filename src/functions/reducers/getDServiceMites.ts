/** @format */

//  getDServiceMites.ts
//  MEGADocker
//  a function that pulls the Docker Swarm service Mites from an array of Mites
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'
import { IMite } from '../../interfaces/objectInterfaces/IMite'

/**
 * updates serviceMites array based on application state
 * @param miteArray an array of mites that should contain some Docker Swarm service mites
 * @returns an array of Docker Swarm service mites
 */
export const getDServiceMites = (miteArray: IMite[]): ITraefikedServiceMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmService`) as ITraefikedServiceMite[]
