/** @format */

//  getCustomMites.ts
//  MEGADocker
//  a function that pulls the Custom Mites from an array of Mites
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/IMite'

/**
 * updates customMites array based on application state
 */
export const getCustomMites = (miteArray: IMite[]): IMite[][] => [miteArray.filter((eachMite) => eachMite.type === `Custom`)]
