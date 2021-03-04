//  webdav.ts
//  MegaDocker
//  A Manikin to generate a WebDAV file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { webdavServiceMite } from '../mites/service/webdavServiceMite';
import { webdavNetworkMite } from '../mites/network/webdavNetworkMite';
import webdavIcon from '../../images/manikin-icons/webdavIcon.png';
import { webdavUser } from '../memories/webdavUser';
import { webdavPassword } from '../memories/webdavPassword';

/**
 * webdav Manikin
 */
export const webdavManikin: IManikin = {
  description: `WebDAV file-sharing service`,
  isCore: false,
  isSelected: false,
  folder: `webdav`,
  manikinGroups: [`Utility`, `Organization`, `Productivity`],
  manikinIcon: webdavIcon,
  manikinIndex: 32,
  memories: [webdavUser, webdavPassword],
  mites: [webdavServiceMite, webdavNetworkMite],
  name: `WebDAV`,
  ports: [],
  subfolders: [`data`],
};
