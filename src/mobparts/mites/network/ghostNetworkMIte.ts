/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for Ghost
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const ghostNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40006,
  miteString: `

# Begin Ghost Network Section

 ghost:
  driver: overlay

# End Ghost Network Section

`,
}
