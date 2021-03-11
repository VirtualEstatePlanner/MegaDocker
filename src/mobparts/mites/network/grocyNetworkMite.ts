/** @format */

//  drupalNetworkMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const grocyNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40017,
  miteString: `

# Begin Grocy Network Section

 grocy:
  driver: overlay

# End Grocy Network Section

`,
}
