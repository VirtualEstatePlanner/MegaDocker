//  skopos.ts
//  MegaDocker
//  A Manikin to generate a Skopos CI/CD service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import * as skoposIcon from '../../images/manikin-icons/skoposIcon.png';

/**
 * skopos Manikin
 */
export let skoposManikin: IManikin = {
  name: `Skopos`,
  mites: [serviceMite, networkMite],
  folder: `Skopos`,
  subfolders: [],
  description: `Skopos Continuous Integraion/Continuous Deployment service`,
  ports: [],
  isSelected: true,
  isCore: true,
  manikinIcon: skoposIcon,
  memories: []
};
