/** @format */

//  ledger.ts
//  MegaDocker
//  A Manikin to generate a Ledger bookeeping service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { ledgerServiceMite } from '../mites/service/ledgerServiceMite'
import { ledgerNetworkMite } from '../mites/network/ledgerNetworkMite'
import { ledgerPostgresPassword } from '../memories/ledgerPostgresPassword'
import ledgerIcon from '../../images/manikin-icons/ledgerIcon.png'
import { ledgerPostgresUser } from '../memories/ledgerPostgresUser'

/**
 * elk Manikin
 */
export const ledgerManikin: IManikin = {
  description: `bookkeeping service`,
  folder: `ledger`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Financial`, `Organization`, `Productivity`],
  manikinIcon: ledgerIcon,
  manikinIndex: 10012,
  memories: [ledgerPostgresPassword, ledgerPostgresUser],
  mites: [ledgerServiceMite, ledgerNetworkMite],
  name: `Ledger`,
  ports: [],
  subfolders: [`pgdata`],
}
