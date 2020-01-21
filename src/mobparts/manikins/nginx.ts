//  nginx.ts
//  MegaDocker
//  A Manikin to generate a Nginx webpage hosting service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import nginxIcon from '../../images/manikin-icons/nginxIcon.png';

/**
 * nginx Manikin
 */
export let nginxManikin: IManikin = {
  name: `Nginx`,
  description: `Nginx http service`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Nginx`,
  subfolders: [`conf`, `pages`, `log`],
  memories: [],
  manikinIcon: nginxIcon
};
