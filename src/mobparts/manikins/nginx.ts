//  nginx.ts
//  MegaDocker
//  A Manikin to generate a Nginx webpage hosting service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { nginxServiceMite } from '../mites/service/nginxServiceMite';
import { nginxNetworkMite } from '../mites/network/nginxNetworkMite';
import nginxIcon from '../../images/manikin-icons/nginxIcon.png';

/**
 * nginx Manikin
 */
export const nginxManikin: IManikin = {
  description: `Nginx http service`,
  folder: `Nginx`,
  isCore: false,
  isSelected: false,
  manikinIcon: nginxIcon,
  manikinIndex: 5,
  memories: [],
  mites: [nginxServiceMite, nginxNetworkMite],
  name: `Nginx`,
  ports: [],
  subfolders: [`conf`, `pages`, `log`]
};
