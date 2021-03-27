/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const comicsNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40002,
  miteString: `

# Begin Comics Network Section

 comics:
  driver: overlay

# End Comics Network Section

`,
}
