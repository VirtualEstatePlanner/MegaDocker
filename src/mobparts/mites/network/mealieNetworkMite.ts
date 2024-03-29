/** @format */

//  mealieNetworkMite.ts
//  MEGADocker
//  Network Mite for Mealie
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const mealieNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40013,
  miteString: `

# Begin Mealie Network Section

 mealie:
  driver: overlay

# End Mealie Network Section

`
}
