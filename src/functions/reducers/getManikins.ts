/** @format */

//  getManikins.ts
//  MEGADocker
//  a function that pulls the selected Manikins from an array of Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

/**
 * updates selectedManikins array based on application state
 */
export const getManikins = (manikinsToSelectFrom: IManikin[]): IManikin[] => manikinsToSelectFrom.filter((eachManikin) => eachManikin.isSelected === true)
