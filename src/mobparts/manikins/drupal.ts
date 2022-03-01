/** @format */

//  drupal.ts
//  MEGADocker
//  A Manikin to generate a Drupal blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { drupalServiceMite } from '../mites/service/drupalServiceMite'
import { drupalNetworkMite } from '../mites/network/drupalNetworkMite'
import drupalIcon from '../../images/manikin-icons/drupalIcon.png'
import { drupalPostgresUser } from '../memories/drupalPostgresUser'
import { drupalPostgresPassword } from '../memories/drupalPostgresPassword'
import { ldapNetworkMite } from '../mites/network/ldapNetworkMite'
import { drupalLdifMite } from '../mites/ldif/drupalLdifMite'

/**
 * drupal Manikin
 */
export const drupalManikin: IManikin = {
  description: `Drupal Blog`,
  folder: `drupal`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`, `Development`],
  manikinIcon: drupalIcon,
  manikinIndex: 10002,
  memories: [drupalPostgresUser, drupalPostgresPassword],
  mites: [drupalLdifMite, drupalServiceMite, drupalNetworkMite, ldapNetworkMite],
  manikinName: `Drupal`,
  ports: [],
  subfolders: [`modules`, `profiles`, `themes`, `sites`, `database`]
}
