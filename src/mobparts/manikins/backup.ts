//  drupal.ts
//  MegaDocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { backupServiceMite } from '../mites/service/backupServiceMite';
import { backupNetworkMite } from '../mites/network/backupNetworkMite';
import * as backupIcon from '../../images/manikin-icons/backupIcon.png';

/**
 * drupal Manikin
 */
export const backupManikin: IManikin = {
  description: `Drupal blog service`,
  folder: `Drupal`,
  isCore: false,
  isSelected: false,
  manikinIcon: backupIcon,
  manikinIndex: 0,
  memories: [],
  mites: [backupServiceMite, backupNetworkMite],
  name: `Backup`,
  ports: [],
  subfolders: [`modules`, `profiles`, `themes`, `sites`]
};
