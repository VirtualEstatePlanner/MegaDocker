//  mealie.ts
//  MegaDocker
//  A Manikin to generate a mealie recipe server
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { mealieServiceMite } from '../mites/service/mealieServiceMite';
import mealieIcon from '../../images/manikin-icons/mealieIcon.png';

/**
 * elk Manikin
 */
export const mealieManikin: IManikin = {
  description: `recipe manager and meal planner`,
  folder: ``,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Organization`],
  manikinIcon: mealieIcon,
  manikinIndex: 14,
  memories: [],
  mites: [mealieServiceMite],
  name: `Mealie`,
  ports: [],
  subfolders: [],
};
