/** @format */

//  portainer.ts
//  MEGADocker
//  A Manikin to generate a Portainer Docker UI service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { portainerServiceMite } from '../mites/service/portainerServiceMite'
import { portainerNetworkMite } from '../mites/network/portainerNetworkMite'
import portainerIcon from '../../images/manikin-icons/portainerIcon.png'
import { portainerLdifMite } from '../mites/ldif/portainerLdifMite'

/**
 * portainer Manikin
 */
export const portainerManikin: IManikin = {
  description: `Docker Host GUI`,
  folder: `portainer`,
  isSelected: false,
  isCore: false,
  manikinGroups: [`Infrastructure`, `Utility`, `Monitoring`, `Network`],
  manikinIcon: portainerIcon,
  manikinIndex: 10023,
  memories: [],
  mites: [portainerLdifMite, portainerServiceMite, portainerNetworkMite],
  manikinName: `Portainer`,
  ports: [],
  subfolders: []
}
