/** @format */

//  drupalNetworkMite.ts
//  MEGADocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const grocyNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40008,
  miteString: `

# Begin Grocy Network Section

 grocy:
  driver: overlay

# End Grocy Network Section

`
}
