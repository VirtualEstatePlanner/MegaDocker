/** @format */

//  drupal.ts
//  MEGADocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { duplicatiServiceMite } from '../mites/service/duplicatiServiceMite'
import duplicatiIcon from '../../images/manikin-icons/duplicatiIcon.png'

/**
 * drupal Manikin
 */
export const duplicatiManikin: IManikin = {
  description: `Incremental Backup`,
  folder: `duplicati`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`Core`, `Utility`],
  manikinIcon: duplicatiIcon,
  manikinIndex: 10003,
  memories: [],
  mites: [duplicatiServiceMite],
  name: `Duplicati`,
  ports: [],
  subfolders: [`data`, `Duplicati`],
}
