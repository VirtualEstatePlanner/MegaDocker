/** @format */

//  maximizeManikin.ts
//  MEGADocker
//  a function that converts an IMiniManikin to an IManikin
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { workingManikins } from '../../globals/workingManikins'

/**
 * creates an IManikin from an IMiniManikin
 */
export const maximizeManikin: Function = (manikin: IMiniManikin): IManikin | void => {
  // search workingManikins for a manikin with a matching manikin.name
  const foundManikin: IManikin | undefined = workingManikins.find((workingManikin: IManikin): boolean => {
    return workingManikin.name === manikin.name
  })
  // compare foundManikin.manikinIndex and manikin.manikinIndex
  if (foundManikin && foundManikin.manikinIndex === manikin.manikinIndex) {
    return foundManikin
  } else {
    console.log(`Error: manikin ${manikin.name} is from an older version of MEGADOCKER`)
  }
}
