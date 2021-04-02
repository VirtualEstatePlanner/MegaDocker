/** @format */

//  minpos.ts
//  MEGADocker
//  A Manikin to generate a MinPOS point of sale service
//  Created by George Georgulas IV on 3/04/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import opensourceposIcon from '../../images/manikin-icons/opensourceposIcon.png'
import { opensourcePOSNetworkMite } from '../mites/network/opensourcePOSNetworkMite'
import { opensourcePOSServiceMite } from '../mites/service/opensourcePOSServiceMite'
import { opensourcePOSMariaDBPassword } from '../memories/opensourcePOSMariaDBPassword'
import { opensourcePOSMariaDBUser } from '../memories/opensourcePOSMariaDBUser'
import { opensourcePOSMariaDBRootPassword } from '../memories/opensourcePOSMariaDBRootPassword'
import { opensourceposLdifMite } from '../mites/ldif/opensourceposLdifMite'

/**
 * minpos Manikin
 */
export const opensourceposManikin: IManikin = {
  description: `Point of Sale`,
  folder: `opensourcepos`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`, `Financial`],
  manikinIcon: opensourceposIcon,
  manikinIndex: 10020,
  memories: [opensourcePOSMariaDBPassword, opensourcePOSMariaDBUser, opensourcePOSMariaDBRootPassword],
  mites: [opensourceposLdifMite, opensourcePOSServiceMite, opensourcePOSNetworkMite],
  name: `osPOS`,
  ports: [],
  subfolders: [`mariadb`, `opensourcepos`],
}
