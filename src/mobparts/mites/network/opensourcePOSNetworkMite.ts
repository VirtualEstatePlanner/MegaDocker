/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const opensourcePOSNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40019,
  miteString: `

# Begin opensourcePOS Network Section

 opensourcepos:
  driver: overlay

# End opensourcePOS Network Section

`,
}
