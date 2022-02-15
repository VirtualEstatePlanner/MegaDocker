/** @format */

//  nginx.ts
//  MEGADocker
//  A Manikin to generate a Nginx webpage hosting service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { nginxServiceMite } from '../mites/service/nginxServiceMite'
import { nginxNetworkMite } from '../mites/network/nginxNetworkMite'
import nginxIcon from '../../images/manikin-icons/nginxIcon.png'
import { nginxDefaultIndexHtmlMite } from '../mites/custom/nginxDefaultIndexHtmlMite'
import { nginxLdifMite } from '../mites/ldif/nginxLdifMite'

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
  manikinIndex: 10019,
  memories: [],
  mites: [nginxLdifMite, nginxServiceMite, nginxNetworkMite, nginxDefaultIndexHtmlMite],
  name: `Nginx`,
  ports: [],
  subfolders: [`pages`, `log`]
}
