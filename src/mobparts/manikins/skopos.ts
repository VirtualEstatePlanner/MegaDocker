//  skopos.ts
//  MegaDocker
//  A Manikin to generate a Skopos CI/CD service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import * as skoposIcon from '../../images/manikin-icons/skoposIcon.png';
import { skoposServiceMite } from '../mites/service/skoposServiceMite';
import { skoposNetworkMite } from '../mites/network/skoposNetworkMite';

/**
 * skopos Manikin
 */
export const skoposManikin: IManikin = {
  description: `Skopos Continuous Integraion/Continuous Deployment service`,
  folder: `Skopos`,
  isCore: true,
  isSelected: true,
  manikinIcon: skoposIcon,
  manikinIndex: 10,
  memories: [],
  mites: [skoposServiceMite, skoposNetworkMite],
  name: `Skopos`,
  subfolders: [],
  ports: []
};
