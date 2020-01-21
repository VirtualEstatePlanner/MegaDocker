//  owncloud.ts
//  MegaDocker
//  A Manikin to generate a Owncloud file-sharing service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import owncloudIcon from '../../images/manikin-icons/owncloudIcon.png';

/**
 * owncloud Manikin
 */
export let owncloudManikin: IManikin = {
  name: `Owncloud`,
  description: `Owncloud file-sharing service`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Owncloud`,
  subfolders: [`apps`, `config`, `data`, `postgres`, `redis`, `mariadb`],
  memories: [],
  manikinIcon: owncloudIcon
};
