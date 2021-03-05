/** @format */

//  serviceMite.ts
//  MegaDocker
//  Network Mite for Portal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const heimdallNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40009,
  miteString: `

#Begin Heimdall Network Section

 heimdall:
  driver: overlay

#End Heimdall Network Section

`,
}
