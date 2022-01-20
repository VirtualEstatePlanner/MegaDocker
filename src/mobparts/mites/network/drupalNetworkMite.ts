/** @format */

//  drupalNetworkMite.ts
//  MEGADocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const drupalNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40003,
  miteString: `

# Begin Drupal Network Section

 drupal:
  driver: overlay

# End Drupal Network Section

  `
}
