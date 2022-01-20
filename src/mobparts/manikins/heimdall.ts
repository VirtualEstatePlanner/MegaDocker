/** @format */

//  portal.ts
//  MEGADocker
//  A Manikin to generate a web portal for quick access to MEGADocker services
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { heimdallServiceMite } from '../mites/service/heimdallServiceMite'
import { heimdallNetworkMite } from '../mites/network/heimdallNetworkMite'
import heimdallIcon from '../../images/manikin-icons/heimdallIcon.png'
import { heimdallLdifMite } from '../mites/ldif/heimdallLdifMite'

/**
 * portal Manikin
 */
export const heimdallManikin: IManikin = {
  description: `Web Portal`,
  folder: `heimdall`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`],
  manikinIcon: heimdallIcon,
  manikinIndex: 10010,
  memories: [],
  mites: [heimdallLdifMite, heimdallServiceMite, heimdallNetworkMite],
  name: `Heimdall`,
  ports: [],
  subfolders: [`log`, `nginx`, `php`, `www`]
}
