/** @format */

//  portal.ts
//  MEGADocker
//  A Manikin to generate a web portal for quick access to MEGADocker services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { kanboardServiceMite } from '../mites/service/kanboardServiceMite'
import { kanboardNetworkMite } from '../mites/network/kanboardNetworkMite'
import kanboardIcon from '../../images/manikin-icons/kanboardIcon.png'
import { kanboardMariaDBPassword } from '../memories/kanboardMariaDBPassword'
import { kanboardMariaDBRootPassword } from '../memories/kanboardMariaDBRootPassword'
import { kanboardMariaDBUser } from '../memories/kanboardMariaDBUser'
import { kanboardLdifMite } from '../mites/ldif/kanboardLdifMite'

/**
 * portal Manikin
 */
export const kanboardManikin: IManikin = {
  description: `Task Sharing`,
  folder: `kanboard`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Organization`, `Productivity`],
  manikinIcon: kanboardIcon,
  manikinIndex: 10011,
  memories: [kanboardMariaDBPassword, kanboardMariaDBRootPassword, kanboardMariaDBUser],
  mites: [kanboardLdifMite, kanboardServiceMite, kanboardNetworkMite],
  manikinName: `Kanboard`,
  ports: [],
  subfolders: [`kanboard-data`, `kanboard-plugins`, `mariadb`]
}
