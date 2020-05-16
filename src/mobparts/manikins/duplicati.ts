//  drupal.ts
//  MegaDocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { duplicatiServiceMite } from '../mites/service/duplicatiServiceMite';
import * as duplicatiIcon from '../../images/manikin-icons/duplicatiIcon.png';

/**
 * drupal Manikin
 */
export const duplicatiManikin: IManikin = {
  description: `Duplicati backup service`,
  folder: `duplicati`,
  isCore: true,
  isSelected: true,
  manikinIcon: duplicatiIcon,
  manikinIndex: 3,
  memories: [],
  mites: [duplicatiServiceMite],
  name: `Duplicati`,
  ports: [],
  subfolders: [`data`, `Duplicati`]
};
