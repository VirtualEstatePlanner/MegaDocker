/** @format */

//  minposNetworkMite.ts
//  MegaDocker
//  Network Mite for MinPOS
//  Created by George Georgulas IV on 3/04/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const minposNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40014,
  miteString: `

# Begin MinPOS Network Section

 minpos:
  driver: overlay

# End MinPOS Network Section

`,
}
