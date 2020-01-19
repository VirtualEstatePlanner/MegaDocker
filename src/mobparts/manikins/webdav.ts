//  webdav.ts
//  MegaDocker
//  A Manikin to generate a WebDAV file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import webdavIcon from '../../images/manikin-icons/webdavIcon.png';

/**
 * webdav Manikin
 */
export let webdavManikin: IManikin = {
  name: `WebDAV`,
  description: `File-sharing server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `WebDAV`,
  subfolders: [],
  memories: [],
  manikinIcon: webdavIcon
};
