/** @format */

//  getMites.ts
//  MEGADocker
//  a function that pulls the Mites from an array of Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMite } from '../../interfaces/objectInterfaces/IMite'

/**
 * updates allMobMites array based on application state
 */
export const getMites = (manikinsToGetMitesFrom: IManikin[]): IMite[] => manikinsToGetMitesFrom.flatMap((eachManikin) => eachManikin.mites.flatMap((eachMite) => eachMite))
