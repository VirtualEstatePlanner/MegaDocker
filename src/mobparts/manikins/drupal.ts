//  drupal.ts
//  MegaDocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import * as drupalIcon from '../../images/manikin-icons/drupalIcon.png';

/**
 * drupal Manikin
 */
export let drupalManikin: IManikin = {
  description: `Drupal blog service`,
  folder: `Drupal`,
  isCore: false,
  isSelected: false,
  manikinIcon: drupalIcon,
  manikinIndex: 0,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `Drupal`,
  ports: [],
  subfolders: [`modules`, `profiles`, `themes`, `sites`]
};
