/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for NextCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const nextcloudNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40017,
  miteString: `

# Begin Nextcloud Network Section

 nextcloud:
  driver: overlay

# End Nextcloud Network Section

`,
}
