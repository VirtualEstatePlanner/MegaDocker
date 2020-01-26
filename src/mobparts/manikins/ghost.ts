//  ghost.ts
//  MegaDocker
//  A Manikin to generate a Ghost blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import ghostIcon from '../../images/manikin-icons/ghostIcon.png';

/**
 * ghost Manikin
 * replace MVOs
 */
export let ghostManikin: IManikin = {
  description: `Ghost blog service`,
  folder: `Ghost`,
  isCore: false,
  isSelected: false,
  manikinIcon: ghostIcon,
  manikinIndex: 2,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `Ghost`,
  ports: [],
  subfolders: []
};
