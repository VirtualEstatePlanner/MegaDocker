/** @format */

//  .ts
//  MEGADocker
//  A Manikin to generate a  service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { swarmpitServiceMite } from '../mites/service/swarmpitServiceMite'
import { swarmpitNetworkMite } from '../mites/network/swarmpitNetworkMite'
import swarmpitIcon from '../../images/manikin-icons/swarmpitIcon.png'
import { swarmpitLdifMite } from '../mites/ldif/swarmpitLdifMite'

/**
 * swarmpit Manikin
 */
export const swarmpitManikin: IManikin = {
  description: `Docker Swarm GUI`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`Development`, `Utility`, `Organization`, `Productivity`],
  folder: `swarmpit`,
  manikinIcon: swarmpitIcon,
  manikinIndex: 10026,
  memories: [],
  name: `Swarmpit`,
  mites: [swarmpitLdifMite, swarmpitServiceMite, swarmpitNetworkMite],
  ports: [],
  subfolders: [`couchbase-data`, `influx-data`]
}
