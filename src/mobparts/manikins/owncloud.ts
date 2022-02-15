/** @format */

//  owncloud.ts
//  MEGADocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { owncloudServiceMite } from '../mites/service/owncloudServiceMite'
import { owncloudNetworkMite } from '../mites/network/owncloudNetworkMite'
import owncloudIcon from '../../images/manikin-icons/owncloudIcon.png'
import { owncloudLdifMite } from '../mites/ldif/owncloudLdifMite'

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
  mites: [owncloudLdifMite, owncloudServiceMite, owncloudNetworkMite],
  name: `Owncloud`,
  ports: [],
  subfolders: [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`]
}
