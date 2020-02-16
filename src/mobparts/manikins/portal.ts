//  portal.ts
//  MegaDocker
//  A Manikin to generate a web portal for quick access to MEGADocker services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { portalServiceMite } from '../mites/service/portalServiceMite';
import { portalNetworkMite } from '../mites/network/portalNetworkMite';
import portalIcon from '../../images/manikin-icons/portalIcon.png';

/**
 * portal Manikin
 */
export const portalManikin: IManikin = {
  description: `Web portal with links to running services`,
  folder: `portal`,
  isCore: false,
  isSelected: false,
  manikinIcon: portalIcon,
  manikinIndex: 8,
  memories: [],
  mites: [portalServiceMite, portalNetworkMite],
  name: `Portal`,
  ports: [],
  subfolders: [`bitnami`, `html`]
};
