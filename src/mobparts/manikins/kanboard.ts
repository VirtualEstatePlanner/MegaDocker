//  portal.ts
//  MegaDocker
//  A Manikin to generate a web portal for quick access to MEGADocker services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { kanboardServiceMite } from '../mites/service/kanboardServiceMite';
import { kanboardNetworkMite } from '../mites/network/kanboardNetworkMite';
import kanboardIcon from '../../images/manikin-icons/kanboardIcon.png';
import { kanboardMariaDBPassword } from '../memories/kanboardMariaDBPassword';
import { kanboardMariaDBRootPassword } from '../memories/kanboardMariaDBRootPassword';
import { kanboardMariaDBUser } from '../memories/kanboardMariaDBUser';

/**
 * portal Manikin
 */
export const kanboardManikin: IManikin = {
  description: `Kanban board for task sharing`,
  folder: `kanboard`,
  isCore: false,
  isSelected: false,
  manikinIcon: kanboardIcon,
  manikinIndex: 13,
  memories: [
    kanboardMariaDBPassword,
    kanboardMariaDBRootPassword,
    kanboardMariaDBUser
  ],
  mites: [kanboardServiceMite, kanboardNetworkMite],
  name: `Kanboard`,
  ports: [],
  subfolders: [`kanboard-data`, `kanboard-plugins`, `mariadb`]
};
