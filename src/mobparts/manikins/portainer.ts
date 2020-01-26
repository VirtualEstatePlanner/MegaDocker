//  portainer.ts
//  MegaDocker
//  A Manikin to generate a Portainer Docker UI service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import portainerIcon from '../../images/manikin-icons/portainerIcon.png';

/**
 * portainer Manikin
 */
export let portainerManikin: IManikin = {
  name: `Portainer`,
  mites: [serviceMite, networkMite],
  folder: `Portainer`,
  subfolders: [],
  description: `Portainer docker host web GUI service`,
  ports: [],
  isSelected: false,
  isCore: false,
  manikinIcon: portainerIcon,
  memories: []
};
