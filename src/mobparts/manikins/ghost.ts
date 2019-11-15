//  ghost.ts
//  MegaDocker
//  A Manikin to generate a Ghost blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';

/**
 * ghost Manikin
 * replace MVOs
 */
export let ghostManikin: IManikin = {
  name: `Ghost`,
  description: `Ghost Blogging platform`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Ghost`,
  subfolders: [],
  memories: [],
  manikinIcon: defaultIcon
};