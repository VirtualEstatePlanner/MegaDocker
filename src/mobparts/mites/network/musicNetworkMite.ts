/** @format */

//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const musicNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40031,
  miteString: `

# Begin Music Network Section

 music:
  driver: overlay

# End Music Network Section

`,
}
