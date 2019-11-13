//  $SOMEMANIKINManikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import skoposIcon from '../../images/manikin-icons/skoposIcon.png';

export const $SOMEAPPLICATIONManikin: IManikin = {
  name: ``,
  description: ``,
  isSelected: false,
  isCore: true,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: ``,
  subfolders: [],
  memories: [],
  manikinIcon: skoposIcon
};
