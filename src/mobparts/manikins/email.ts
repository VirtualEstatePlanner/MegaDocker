//  elk.ts
//  MegaDocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { emailServiceMite } from '../mites/service/emailServiceMite';
import { emailNetworkMite } from '../mites/network/emailNetworkMite';
import * as emailIcon from '../../images/manikin-icons/emailIcon.png';

/**
 * elk Manikin
 */
export const emailManikin: IManikin = {
  description: `email server`,
  folder: `mail`,
  isCore: false,
  isSelected: false,
  manikinIcon: emailIcon,
  manikinIndex: 1,
  memories: [],
  mites: [emailServiceMite, emailNetworkMite],
  name: `E-mail`,
  ports: [],
  subfolders: [`rainloop`, `maildata`, `mailstate`, `config`]
};
