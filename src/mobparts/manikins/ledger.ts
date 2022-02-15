/** @format */

//  ledger.ts
//  MEGADocker
//  A Manikin to generate a Ledger bookeeping service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { ledgerServiceMite } from '../mites/service/ledgerServiceMite'
import { ledgerNetworkMite } from '../mites/network/ledgerNetworkMite'
import { ledgerPostgresPassword } from '../memories/ledgerPostgresPassword'
import ledgerIcon from '../../images/manikin-icons/ledgerIcon.png'
import { ledgerPostgresUser } from '../memories/ledgerPostgresUser'
import { ledgerLdifMite } from '../mites/ldif/ledgerLdifMite'

/**
 * elk Manikin
 */
export const ledgerManikin: IManikin = {
  description: `Bookkeeping`,
  folder: `ledger`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Financial`, `Organization`, `Productivity`],
  manikinIcon: ledgerIcon,
  manikinIndex: 10013,
  memories: [ledgerPostgresPassword, ledgerPostgresUser],
  mites: [ledgerLdifMite, ledgerServiceMite, ledgerNetworkMite],
  name: `Ledger`,
  ports: [],
  subfolders: [`pgdata`]
}
