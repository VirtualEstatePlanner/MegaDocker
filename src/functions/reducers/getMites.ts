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
 * @param manikinsToGetMitesFrom the manikins that have been selected
 * @returns an array of all Mites in the Mob
 */
export const getMites = (manikinsToGetMitesFrom: IManikin[]): IMite[] => manikinsToGetMitesFrom.flatMap((eachManikin) => eachManikin.mites.flatMap((eachMite) => eachMite))
