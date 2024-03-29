/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for NextCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const ledgerNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40012,
  miteString: `

# Begin Ledger Network Section

 ledger:
  driver: overlay

# End Ledger Network Section

`
}
