/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const moviesNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40014,
  miteString: `

# Begin Movies Network Section

 movies:
  driver: overlay

# End Movies Network Section

`,
}
