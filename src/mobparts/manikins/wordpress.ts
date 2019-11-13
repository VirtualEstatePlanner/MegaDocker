//  wordpress/manikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { wordpressServiceMite } from '../mites/service/wordpressServiceMite';
import { wordpressNetworkMite } from '../mites/network/wordpressNetworkMite';
import wordpressIcon from '../../images/manikin-icons/wordpressIcon.png';

export const wordpressManikin: IManikin = {
  name: ``,
  manikinIcon: wordpressIcon,
  description: ``,
  isSelected: false,
  mites: [wordpressServiceMite, wordpressNetworkMite],
  ports: [],
  folder: ``,
  subfolders: [],
  memories: []
};
