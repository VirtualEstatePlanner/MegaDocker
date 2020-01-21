//  .ts
//  MegaDocker
//  A Manikin to generate a  service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import swarmpitIcon from '../../images/manikin-icons/swarmpitIcon.png';

/**
 * swarmpit Manikin
 */
export let swarmpitManikin: IManikin = {
  manikinIcon: swarmpitIcon,
  isCore: true,
  isSelected: true,
  mites: [serviceMite, networkMite],
  ports: [],
  memories: [],
  name: `Swarmpit`,
  folder: `Swarmpit`,
  subfolders: [`database`],
  description: `Swarmpit Docker swarm mode GUI service`
};
