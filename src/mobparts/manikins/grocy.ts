//  drupal.ts
//  MegaDocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { grocyServiceMite } from '../mites/service/grocyServiceMite';
import { grocyNetworkMite } from '../mites/network/grocyNetworkMite';
import grocyIcon from '../../images/manikin-icons/grocyIcon.png';

/**
 * drupal Manikin
 */
export const grocyManikin: IManikin = {
  description: `Grocy home management service`,
  folder: `grocy`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Monitoring`, `Utility`],
  manikinIcon: grocyIcon,
  manikinIndex: 10008,
  memories: [],
  mites: [grocyServiceMite, grocyNetworkMite],
  name: `Grocy`,
  ports: [],
  subfolders: [`app`, `barcodebuddy`],
};
