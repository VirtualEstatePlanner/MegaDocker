//  portal.ts
//  MegaDocker
//  A Manikin to generate a web portal for quick access to MEGADocker services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import portalIcon from '../../images/manikin-icons/portalIcon.png';

/**
 * portal Manikin
 */
export let portalManikin: IManikin = {
  name: `Portal`,
  description: `Web portal with links to running services`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Portal`,
  subfolders: [`bitnami`, `html`],
  memories: [],
  manikinIcon: portalIcon
};
