//  minpos.ts
//  MegaDocker
//  A Manikin to generate a MinPOS point of sale service
//  Created by George Georgulas IV on 3/04/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { minposServiceMite } from '../mites/service/minposServiceMite';
import { minposNetworkMite } from '../mites/network/minposNetworkMite';
import minposIcon from '../../images/manikin-icons/minposIcon.png';

/**
 * minpos Manikin
 */
export const minposManikin: IManikin = {
  description: `MinPOS Point-of-Sale service`,
  folder: `minpos`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Financial`],
  manikinIcon: minposIcon,
  manikinIndex: 10014,
  memories: [],
  mites: [minposServiceMite, minposNetworkMite],
  name: `MinPOS`,
  ports: [],
  subfolders: [`postgres`, `minpos`],
};
