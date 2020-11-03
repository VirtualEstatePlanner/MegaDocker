//  nextcloud.ts
//  MegaDocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { nextcloudServiceMite } from '../mites/service/nextcloudServiceMite';
import { nextcloudNetworkMite } from '../mites/network/nextcloudNetworkMite';
import nextcloudIcon from '../../images/manikin-icons/nextcloudIcon.png';
import { nextcloudMariaDBPassword } from '../memories/nextcloudMariaDBPassword';
import { nextcloudMariaDBRootPassword } from '../memories/nextcloudMariaDBRootPassword';
import { nextcloudMariaDBUser } from '../memories/nextcloudMariaDBUser';

/**
 * nextcloud Manikin
 */
export const nextcloudManikin: IManikin = {
  description: `Nextcloud file-sharing service`,
  folder: `nextcloud`,
  isCore: false,
  isSelected: false,
  manikinIcon: nextcloudIcon,
  manikinIndex: 17,
  memories: [
    nextcloudMariaDBPassword,
    nextcloudMariaDBRootPassword,
    nextcloudMariaDBUser,
  ],
  mites: [nextcloudServiceMite, nextcloudNetworkMite],
  name: `Nextcloud`,
  ports: [],
  subfolders: [`application`, `mariadb`],
};
