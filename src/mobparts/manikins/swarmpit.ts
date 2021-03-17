/** @format */

//  .ts
//  MegaDocker
//  A Manikin to generate a  service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { swarmpitServiceMite } from '../mites/service/swarmpitServiceMite'
import { swarmpitNetworkMite } from '../mites/network/swarmpitNetworkMite'
import swarmpitIcon from '../../images/manikin-icons/swarmpitIcon.png'

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
  manikinIndex: 10025,
  memories: [],
  name: `Swarmpit`,
  mites: [swarmpitServiceMite, swarmpitNetworkMite],
  ports: [],
  subfolders: [`couchbase-data`, `influx-data`],
}
