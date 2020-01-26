//  webdav.ts
//  MegaDocker
//  A Manikin to generate a WebDAV file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import webdavIcon from '../../images/manikin-icons/webdavIcon.png';

/**
 * webdav Manikin
 */
export let webdavManikin: IManikin = {
  description: `WebDAV file-sharing service`,
  isCore: false,
  isSelected: false,
  folder: `WebDAV`,
  manikinIcon: webdavIcon,
  manikinIndex: 14,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `WebDAV`,
  ports: [],
  subfolders: []
};
