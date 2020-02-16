//  portainer.ts
//  MegaDocker
//  A Manikin to generate a Portainer Docker UI service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { portainerServiceMite } from '../mites/service/portainerServiceMite';
import { portainerNetworkMite } from '../mites/network/portainerNetworkMite';
import portainerIcon from '../../images/manikin-icons/portainerIcon.png';

/**
 * portainer Manikin
 */
export const portainerManikin: IManikin = {
  description: `Portainer docker host web GUI service`,
  folder: `portainer`,
  isSelected: false,
  isCore: false,
  manikinIcon: portainerIcon,
  manikinIndex: 7,
  memories: [],
  mites: [portainerServiceMite, portainerNetworkMite],
  name: `Portainer`,
  ports: [],
  subfolders: []
};
