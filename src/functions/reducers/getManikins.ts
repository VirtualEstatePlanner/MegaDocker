/** @format */

//  getManikins.ts
//  MEGADocker
//  a function that pulls the selected Manikins from an array of Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

/**
 * updates selectedManikins array based on application state
 * @param manikinsToSelectFrom the contents of the manikinTable
 * @returns an array of selected Manikins
 */
export const getManikins = (manikinsToSelectFrom: IManikin[]): IManikin[] => manikinsToSelectFrom.filter((eachManikin) => eachManikin.isSelected === true)
