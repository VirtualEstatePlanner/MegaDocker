/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const musicNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40015,
  miteString: `

# Begin Music Network Section

 music:
  driver: overlay

# End Music Network Section

`
}
