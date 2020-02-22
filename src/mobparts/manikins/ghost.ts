//  ghost.ts
//  MegaDocker
//  A Manikin to generate a Ghost blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { ghostServiceMite } from '../mites/service/ghostServiceMite';
import { ghostNetworkMite } from '../mites/network/ghostNetworkMIte';
import ghostIcon from '../../images/manikin-icons/ghostIcon.png';
import { ghostMariaDBRootPassword } from '../memories/ghostRootMariaDBPassword';

/**
 * ghost Manikin
 * replace MVOs
 */
export const ghostManikin: IManikin = {
  description: `Ghost blog service`,
  folder: `ghost`,
  isCore: false,
  isSelected: false,
  manikinIcon: ghostIcon,
  manikinIndex: 2,
  memories: [ghostMariaDBRootPassword],
  mites: [ghostServiceMite, ghostNetworkMite],
  name: `Ghost`,
  ports: [],
  subfolders: [`mariadb`]
};
