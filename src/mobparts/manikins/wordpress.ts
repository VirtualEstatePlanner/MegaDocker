//  wordpress/manikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { serviceMite } from './serviceMite';
import { networkMite } from './networkMite';

export const wordpressManikin: IManikin = {
  name: ``,
  description: ``,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: ``,
  subfolders: [],
  memories: []
};
