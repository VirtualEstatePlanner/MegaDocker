//  n8n.ts
//  MegaDocker
//  A Manikin to create the n8n middleware
//  Created by George Georgulas IV on 11/3/2020.
//  Copyright © 2020 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';
import { n8nServiceMite } from '../mites/service/n8nServiceMite';
import { n8nNetworkMite } from '../mites/network/n8nNetworkMite';
import * as n8nIcon from '../../images/manikin-icons/n8nIcon.png';
import { n8nUser } from '../memories/n8nUser';
import { n8nPassword } from '../memories/n8nPassword';

/**
 * n8n Manikin
 */
export const n8nManikin: IManikin = {
  description: `Service integration system`,
  folder: `n8n`,
  isCore: true,
  isSelected: true,
  manikinIcon: n8nIcon,
  manikinIndex: 16,
  memories: [
    n8nUser,
    n8nPassword
  ],
  mites: [
    n8nServiceMite,
    n8nNetworkMite
  ],
  name: `n8n`,
  ports: [],
  subfolders: [`data`, `settings`],
};
