//  IManikin.ts
//  MegaDocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from './IManikin';
import { httpPort } from '../mobparts/manikinports/httpPort';
import { mobName } from '../mobparts/memories/mobName';
import { traefikNetworkMite } from '../mobparts/mites/network/traefikNetworkMite';
import defaultIcon from '../images/manikin-icons/defaultIcon.png';

const someTestManikin: IManikin = {
  name: `someManikinName`,
  manikinIcon: defaultIcon,
  description: `it does something that is your bidding`,
  isCore: true,
  isSelected: true,
  mites: [traefikNetworkMite],
  ports: [httpPort],
  folder: `mainFolder`,
  subfolders: [`subA`, `subB`, `subC`],
  memories: [mobName]
};
