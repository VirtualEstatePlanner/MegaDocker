/** @format */

//  serviceMite.ts
//  MegaDocker
//  Network Mite for Portal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const kanboardNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40021,
  miteString: `

# Begin Kanboard Network Section

 kanboard:
  driver: overlay

# End Kanboard Network Section

`,
}
