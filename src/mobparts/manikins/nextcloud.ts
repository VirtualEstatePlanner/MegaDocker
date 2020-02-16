//  owncloud.ts
//  MegaDocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { nextcloudServiceMite } from '../mites/service/nextcloudServiceMite';
import { nextcloudNetworkMite } from '../mites/network/nextcloudNetworkMite';
import nextcloudIcon from '../../images/manikin-icons/nextcloudIcon.png';

/**
 * nextcloud Manikin
 */
export const nextcloudManikin: IManikin = {
  description: `Nextcloud file-sharing service`,
  folder: `nextcloud`,
  isCore: false,
  isSelected: false,
  manikinIcon: nextcloudIcon,
  manikinIndex: 6,
  memories: [],
  mites: [nextcloudServiceMite, nextcloudNetworkMite],
  name: `Nextcloud`,
  ports: [],
  subfolders: [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`]
};
