/** @format */

//  nextcloud.ts
//  MEGADocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { nextcloudServiceMite } from '../mites/service/nextcloudServiceMite'
import { nextcloudNetworkMite } from '../mites/network/nextcloudNetworkMite'
import nextcloudIcon from '../../images/manikin-icons/nextcloudIcon.png'
import { nextcloudMariaDBPassword } from '../memories/nextcloudMariaDBPassword'
import { nextcloudMariaDBRootPassword } from '../memories/nextcloudMariaDBRootPassword'
import { nextcloudMariaDBUser } from '../memories/nextcloudMariaDBUser'
import { nextcloudLdifMite } from '../mites/ldif/nextcloudLdifMite'

/**
 * nextcloud Manikin
 */
export const nextcloudManikin: IManikin = {
  description: `Filesharing`,
  folder: `nextcloud`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Organization`, `Productivity`],
  manikinIcon: nextcloudIcon,
  manikinIndex: 10018,
  memories: [nextcloudMariaDBPassword, nextcloudMariaDBRootPassword, nextcloudMariaDBUser],
  mites: [nextcloudLdifMite, nextcloudServiceMite, nextcloudNetworkMite],
  name: `Nextcloud`,
  ports: [],
  subfolders: [`application`, `mariadb`]
}
