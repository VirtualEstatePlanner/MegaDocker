/** @format */

//  drupalNetworkMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const drupalNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40007,
  miteString: `

# Begin Drupal Network Section

 drupal:
  driver: overlay

# End Drupal Network Section

  `,
}
