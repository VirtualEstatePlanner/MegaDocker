//  ledger.ts
//  MegaDocker
//  A Manikin to generate a Ledger bookeeping service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { ledgerServiceMite } from '../mites/service/ledgerServiceMite';
import { ledgerNetworkMite } from '../mites/network/ledgerNetworkMite';
import { ledgerPostgresPassword } from '../memories/ledgerPostgresPassword';
import * as ledgerIcon from '../../images/manikin-icons/ledgerIcon.png';

/**
 * elk Manikin
 */
export const ledgerManikin: IManikin = {
  description: `bookkeeping service`,
  folder: `ledger`,
  isCore: false,
  isSelected: false,
  manikinIcon: ledgerIcon,
  manikinIndex: 7,
  memories: [ledgerPostgresPassword],
  mites: [ledgerServiceMite, ledgerNetworkMite],
  name: `Ledger`,
  ports: [],
  subfolders: [`postgres`, `maildata`, `mailstate`, `rainloop`]
};