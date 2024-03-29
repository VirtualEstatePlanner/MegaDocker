/** @format */

//  .ts
//  MEGADocker
//  A Manikin to generate a react component styleguidist service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { syncthingServiceMite } from '../mites/service/syncthingServiceMite'
import syncthingIcon from '../../images/manikin-icons/syncthingIcon.png'
import { syncthingLdifMite } from '../mites/ldif/syncthingLdifMite'

/**
 * styleguidist Manikin
 */
export const syncthingManikin: IManikin = {
  description: `Folder Synchronization`,
  isCore: false,
  isSelected: false,
  folder: `syncthing`,
  manikinGroups: [`Development`, `Utility`, `Organization`, `Productivity`],
  manikinIcon: syncthingIcon,
  manikinIndex: 10027,
  memories: [],
  manikinName: `Syncthing`,
  mites: [syncthingLdifMite, syncthingServiceMite],
  ports: [],
  subfolders: [`data`]
}
