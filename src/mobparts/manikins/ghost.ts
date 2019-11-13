//  $SOMEMANIKINManikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';

export const $SOMEAPPLICATIONManikin: IManikin = {
  name: ``,
  description: ``,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: ``,
  subfolders: [],
  memories: [],
  manikinIcon: defaultIcon
};
