/** @format */

//  mealie.ts
//  MEGADocker
//  A Manikin to generate a mealie recipe server
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { mealieServiceMite } from '../mites/service/mealieServiceMite'
import mealieIcon from '../../images/manikin-icons/mealieIcon.png'
import { mealieLdifMite } from '../mites/ldif/mealieLdifMite'

/**
 * elk Manikin
 */
export const mealieManikin: IManikin = {
  description: `Recipe Manager and Meal Planning`,
  folder: ``,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Organization`],
  manikinIcon: mealieIcon,
  manikinIndex: 10014,
  memories: [],
  mites: [mealieLdifMite, mealieServiceMite],
  name: `Mealie`,
  ports: [],
  subfolders: []
}
