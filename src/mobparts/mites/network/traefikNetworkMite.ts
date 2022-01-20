/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const traefikNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40027,
  miteString: `

# Begin Traefik Network Section

 traefik:
  driver: overlay

# End Traefik Network Section

`
}
