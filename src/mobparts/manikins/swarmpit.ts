//  .ts
//  MegaDocker
//  A Manikin to generate a  service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import swarmpitIcon from '../../images/manikin-icons/swarmpitIcon.png';

/**
 * swarmpit Manikin
 */
export let swarmpitManikin: IManikin = {
  description: `Swarmpit Docker swarm mode GUI service`,
  isCore: true,
  isSelected: true,
  folder: `Swarmpit`,
  manikinIcon: swarmpitIcon,
  manikinIndex: 11,
  memories: [],
  name: `Swarmpit`,
  mites: [serviceMite, networkMite],
  ports: [],
  subfolders: [`database`]
};
