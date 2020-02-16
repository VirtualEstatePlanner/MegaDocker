//  drupal.ts
//  MegaDocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { drupalServiceMite } from '../mites/service/drupalServiceMite';
import { drupalNetworkMite } from '../mites/network/drupalNetworkMite';
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
  mites: [drupalServiceMite, drupalNetworkMite],
  name: `Drupal`,
  ports: [],
  subfolders: [`modules`, `profiles`, `themes`, `sites`]
};
