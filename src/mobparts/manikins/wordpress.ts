//  wordpress.ts
//  MegaDocker
//  A Manikin to generate a WordPress blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { wordpressServiceMite } from '../mites/service/wordpressServiceMite';
import { wordpressNetworkMite } from '../mites/network/wordpressNetworkMite';
import * as wordpressIcon from '../../images/manikin-icons/wordpressIcon.png';

export const wordpressManikin: IManikin = {
  name: `WordPress`,
  manikinIcon: wordpressIcon,
  description: ``,
  isCore: false,
  isSelected: false,
  mites: [wordpressServiceMite, wordpressNetworkMite],
  ports: [],
  folder: `WordPress`,
  subfolders: [`mariadb`, `wordpress`],
  memories: []
};
