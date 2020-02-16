//  ghost.ts
//  MegaDocker
//  A Manikin to generate a Ghost blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { ghostServiceMite } from '../mites/service/ghostServiceMite';
import { ghostNetworkMite } from '../mites/network/ghostNetworkMIte';
import ghostIcon from '../../images/manikin-icons/ghostIcon.png';
import { ghostRootMariaDBPassword } from '../memories/ghostRootMariaDBPassword';

/**
 * ghost Manikin
 * replace MVOs
 */
export let ghostManikin: IManikin = {
  description: `Ghost blog service`,
  folder: `Ghost`,
  isCore: false,
  isSelected: false,
  manikinIcon: ghostIcon,
  manikinIndex: 2,
  memories: [ghostRootMariaDBPassword],
  mites: [ghostServiceMite, ghostNetworkMite],
  name: `Ghost`,
  ports: [],
  subfolders: []
};
