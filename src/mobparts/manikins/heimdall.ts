//  portal.ts
//  MegaDocker
//  A Manikin to generate a web portal for quick access to MEGADocker services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { heimdallServiceMite } from '../mites/service/heimdallServiceMite';
import { heimdallNetworkMite } from '../mites/network/heimdallNetworkMite';
import heimdallIcon from '../../images/manikin-icons/heimdallIcon.png';

/**
 * portal Manikin
 */
export const heimdallManikin: IManikin = {
  description: `Heimdall web portal`,
  folder: `heimdall`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`],
  manikinIcon: heimdallIcon,
  manikinIndex: 10,
  memories: [],
  mites: [heimdallServiceMite, heimdallNetworkMite],
  name: `Heimdall`,
  ports: [],
  subfolders: [`log`, `nginx`, `php`, `www`],
};
