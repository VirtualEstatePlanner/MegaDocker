//  drupal.ts
//  MegaDocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import * as drupalIcon from '../../images/manikin-icons/drupalIcon.png';

/**
 * drupal Manikin
 */
export let drupalManikin: IManikin = {
  name: `Drupal`,
  description: `Drupal blog service`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Drupal`,
  subfolders: [`modules`, `profiles`, `themes`, `sites`],
  memories: [],
  manikinIcon: drupalIcon
};
