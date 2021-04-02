/** @format */

//  drupal.ts
//  MEGADocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { duplicatiServiceMite } from '../mites/service/duplicatiServiceMite'
import duplicatiIcon from '../../images/manikin-icons/duplicatiIcon.png'
import { duplicatiLdifMite } from '../mites/ldif/duplicatiLdifMite'

/**
 * drupal Manikin
 */
export const duplicatiManikin: IManikin = {
  description: `Incremental Backup`,
  folder: `duplicati`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`MegaDockerCore`, `Utility`],
  manikinIcon: duplicatiIcon,
  manikinIndex: 10003,
  memories: [],
  mites: [duplicatiLdifMite, duplicatiServiceMite],
  name: `Duplicati`,
  ports: [],
  subfolders: [`data`, `Duplicati`],
}
