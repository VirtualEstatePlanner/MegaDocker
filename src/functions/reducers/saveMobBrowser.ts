/** @format */

//  saveMobBrowser.ts
//  MEGADocker
//  a function that saves a mob file in progress in the browser
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMite } from '../../interfaces/objectInterfaces/IMite'
import fileSaver from 'file-saver'

/**
 * updates allMobMites array based on application state
 */
export const saveMobBrowser = (manikinsToGetMitesFrom: IManikin[]): IMite[] => manikinsToGetMitesFrom.flatMap((eachManikin) => eachManikin.mites.flatMap((eachMite) => eachMite))
