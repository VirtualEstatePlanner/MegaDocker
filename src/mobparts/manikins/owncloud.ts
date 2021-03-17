/** @format */

//  owncloud.ts
//  MegaDocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { owncloudServiceMite } from '../mites/service/owncloudServiceMite'
import { owncloudNetworkMite } from '../mites/network/owncloudNetworkMite'
import owncloudIcon from '../../images/manikin-icons/owncloudIcon.png'

/**
 * owncloud Manikin
 */
export const owncloudManikin: IManikin = {
  description: `Filesharing`,
  folder: `owncloud`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Organization`, `Productivity`],
  manikinIcon: owncloudIcon,
  manikinIndex: 10020,
  memories: [],
  mites: [owncloudServiceMite, owncloudNetworkMite],
  name: `Owncloud`,
  ports: [],
  subfolders: [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`],
}
