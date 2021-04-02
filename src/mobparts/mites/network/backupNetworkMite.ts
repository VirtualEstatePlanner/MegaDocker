/** @format */

//  backupNetworkMite.ts
//  MEGADocker
//  Network Mite for Backup
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const backupNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40000,
  miteString: `

# Begin Backup Network Section

 backup:
  driver: overlay

# End Backup Network Section

`,
}
