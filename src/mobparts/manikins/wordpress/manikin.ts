//  $SOMEMANIKINManikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../../classes/IManikin';
import { $SOMEMANIKINService } from './serviceMite';
import { $SOMEMANIKINNetwork } from './networkMite';

export const $SOMEAPPLICATIONManikin: IManikin = {
  name: ``,
  description: ``,
  isSelected: false,
  mites: [],
  ports: [],
  folder: ``,
  subfolders: [],
  variables: []
};
