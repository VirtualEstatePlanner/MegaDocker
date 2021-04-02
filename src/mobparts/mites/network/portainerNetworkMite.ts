/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for Portainer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const portainerNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40023,
  miteString: `

# Begin Portainer Network Section

 portainer:
  driver: overlay

# End Portainer Network Section

`,
}
