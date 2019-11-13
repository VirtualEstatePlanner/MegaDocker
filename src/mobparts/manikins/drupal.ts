//  drupalManikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { drupalServiceMite } from '../mites/service/drupalServiceMite';
import { drupalNetworkMite } from '../mites/network/drupalNetworkMite';
//TODO: ADD ICON
import drupalIcon from '../../images/manikin-icons/drupalIcon.png';

export const drupalManikin: IManikin = {
  name: ``,
  manikinIcon: drupalIcon,
  description: ``,
  isSelected: false,
  mites: [drupalServiceMite, drupalNetworkMite],
  ports: [],
  folder: ``,
  subfolders: [],
  memories: []
};
