/** @format */

//  owncloud.ts
//  MEGADocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

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
  manikinIndex: 10021,
  memories: [],
  mites: [owncloudServiceMite, owncloudNetworkMite],
  name: `Owncloud`,
  ports: [],
  subfolders: [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`],
}
