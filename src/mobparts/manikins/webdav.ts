/** @format */

//  webdav.ts
//  MEGADocker
//  A Manikin to generate a WebDAV file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { webdavServiceMite } from '../mites/service/webdavServiceMite'
import { webdavNetworkMite } from '../mites/network/webdavNetworkMite'
import webdavIcon from '../../images/manikin-icons/webdavIcon.png'
import { webdavUser } from '../memories/webdavUser'
import { webdavPassword } from '../memories/webdavPassword'
import { webdavLdifMite } from '../mites/ldif/webdavLdifMite'

/**
 * webdav Manikin
 */
export const webdavManikin: IManikin = {
  description: `WebDAV Filesharing`,
  isCore: false,
  isSelected: false,
  folder: `webdav`,
  manikinGroups: [`Utility`, `Organization`, `Productivity`],
  manikinIcon: webdavIcon,
  manikinIndex: 10032,
  memories: [webdavUser, webdavPassword],
  mites: [webdavLdifMite, webdavServiceMite, webdavNetworkMite],
  name: `WebDAV`,
  ports: [],
  subfolders: [`data`]
}
