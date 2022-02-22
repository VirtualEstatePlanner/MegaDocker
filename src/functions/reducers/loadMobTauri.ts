/** @format */

//  loadMobTauri.ts
//  MEGADocker
//  a function that loads a mob file in progress in Tauri
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMite } from '../../interfaces/objectInterfaces/IMite'

/**
 * updates allMobMites array based on application state
 */
export const loadMobTauri = (manikinsToGetMitesFrom: IManikin[]): IMite[] => manikinsToGetMitesFrom.flatMap((eachManikin) => eachManikin.mites.flatMap((eachMite) => eachMite))
