/** @format */

//  ghost.ts
//  MEGADocker
//  A Manikin to generate a Ghost blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { ghostServiceMite } from '../mites/service/ghostServiceMite'
import { ghostNetworkMite } from '../mites/network/ghostNetworkMIte'
import ghostIcon from '../../images/manikin-icons/ghostIcon.png'
import { ghostMariaDBRootPassword } from '../memories/ghostRootMariaDBPassword'
import { ghostLdifMite } from '../mites/ldif/ghostLdifMite'

/**
 * ghost Manikin
 * replace MVOs
 */
export const ghostManikin: IManikin = {
  description: `Ghost Blogging`,
  folder: `ghost`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`, `Development`],
  manikinIcon: ghostIcon,
  manikinIndex: 10007,
  memories: [ghostMariaDBRootPassword],
  mites: [ghostLdifMite, ghostServiceMite, ghostNetworkMite],
  name: `Ghost`,
  ports: [],
  subfolders: [`mariadb`],
}
