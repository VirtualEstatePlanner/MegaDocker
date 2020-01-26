//  wordpress.ts
//  MegaDocker
//  A Manikin to generate a WordPress blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';
import { wordpressServiceMite } from '../mites/service/wordpressServiceMite';
import { wordpressNetworkMite } from '../mites/network/wordpressNetworkMite';
import * as wordpressIcon from '../../images/manikin-icons/wordpressIcon.png';

export const wordpressManikin: IManikin = {
  description: `Wordpress Blogging Platform`,
  folder: `WordPress`,
  isCore: false,
  isSelected: false,
  manikinIcon: wordpressIcon,
  manikinIndex: 15,
  memories: [],
  mites: [wordpressServiceMite, wordpressNetworkMite],
  name: `WordPress`,
  ports: [],
  subfolders: [`mariadb`, `wordpress`]
};
