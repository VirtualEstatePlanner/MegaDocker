/** @format */

//  nginx.ts
//  MegaDocker
//  A Manikin to generate a Nginx webpage hosting service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { nginxServiceMite } from '../mites/service/nginxServiceMite'
import { nginxNetworkMite } from '../mites/network/nginxNetworkMite'
import nginxIcon from '../../images/manikin-icons/nginxIcon.png'
import { nginxDefaultIndexHtmlMite } from '../mites/custom/nginxDefaultIndexHtmlMite'

/**
 * nginx Manikin
 */
export const nginxManikin: IManikin = {
  description: `HTTP/S Web Server`,
  folder: `nginx`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`],
  manikinIcon: nginxIcon,
  manikinIndex: 10018,
  memories: [],
  mites: [nginxServiceMite, nginxNetworkMite, nginxDefaultIndexHtmlMite],
  name: `Nginx`,
  ports: [],
  subfolders: [`pages`, `log`],
}
