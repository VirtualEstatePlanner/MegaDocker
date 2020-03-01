//  nginx.ts
//  MegaDocker
//  A Manikin to generate a Nginx webpage hosting service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { nginxServiceMite } from '../mites/service/nginxServiceMite';
import { nginxNetworkMite } from '../mites/network/nginxNetworkMite';
import nginxIcon from '../../images/manikin-icons/nginxIcon.png';
import { nginxConfMite } from '../mites/custom/nginxConfMite';
import { nginxConfTemplateMite } from '../mites/custom/nginxConfTemplate';
import { nginxDefaultIndexHtml } from '../mites/custom/nginxDefaultIndexHtml';

/**
 * nginx Manikin
 */
export const nginxManikin: IManikin = {
  description: `Nginx http service`,
  folder: `nginx`,
  isCore: false,
  isSelected: false,
  manikinIcon: nginxIcon,
  manikinIndex: 9,
  memories: [],
  mites: [
    nginxServiceMite,
    nginxNetworkMite,
    nginxConfMite,
    nginxConfTemplateMite,
    nginxDefaultIndexHtml
  ],
  name: `Nginx`,
  ports: [],
  subfolders: [`conf`, `pages`, `log`]
};
