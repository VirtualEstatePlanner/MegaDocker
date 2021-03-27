/** @format */

//  drupal.ts
//  MEGADocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { grocyServiceMite } from '../mites/service/grocyServiceMite'
import { grocyNetworkMite } from '../mites/network/grocyNetworkMite'
import grocyIcon from '../../images/manikin-icons/grocyIcon.png'
import { grocyLdifMite } from '../mites/ldif/grocyLdifMite'

/**
 * drupal Manikin
 */
export const grocyManikin: IManikin = {
  description: `Home Resource Planning`,
  folder: `grocy`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Monitoring`, `Utility`],
  manikinIcon: grocyIcon,
  manikinIndex: 10009,
  memories: [],
  mites: [grocyLdifMite, grocyServiceMite, grocyNetworkMite],
  name: `Grocy`,
  ports: [],
  subfolders: [`app`, `barcodebuddy`],
}
