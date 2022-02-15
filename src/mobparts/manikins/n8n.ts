/** @format */

//  n8n.ts
//  MEGADocker
//  A Manikin to create the n8n middleware
//  Created by George Georgulas IV on 11/3/20.
//  Copyright © 2020 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { n8nServiceMite } from '../mites/service/n8nServiceMite'
import { n8nNetworkMite } from '../mites/network/n8nNetworkMite'
import n8nIcon from '../../images/manikin-icons/n8nIcon.png'
import { n8nUser } from '../memories/n8nUser'
import { n8nPassword } from '../memories/n8nPassword'
import { n8nLdifMite } from '../mites/ldif/n8nLdifMite'

/**
 * n8n Manikin
 */
export const n8nManikin: IManikin = {
  description: `Automation and Integration`,
  folder: `n8n`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`Utility`],
  manikinIcon: n8nIcon,
  manikinIndex: 10017,
  memories: [n8nUser, n8nPassword],
  mites: [n8nLdifMite, n8nServiceMite, n8nNetworkMite],
  name: `n8n`,
  ports: [],
  subfolders: [`data`, `settings`]
}
