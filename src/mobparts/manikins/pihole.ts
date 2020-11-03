//  pihole.ts
//  MegaDocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { piholeServiceMite } from '../mites/service/piholeServiceMite';
import { piholeNetworkMite } from '../mites/network/piholeNetworkMite';
import { piholePassword } from '../memories/piholePassword';
import piholeIcon from '../../images/manikin-icons/piholeIcon.png';

/**
 * drupal Manikin
 */
export const piholeManikin: IManikin = {
  description: `Pihole DNS-based adblocker`,
  folder: `pihole`,
  isCore: false,
  isSelected: false,
  manikinIcon: piholeIcon,
  manikinIndex: 20,
  memories: [piholePassword],
  mites: [piholeServiceMite, piholeNetworkMite],
  name: `Pihole`,
  ports: [],
  subfolders: [`etc-pihole`, `etc-dnsmasq`],
};
