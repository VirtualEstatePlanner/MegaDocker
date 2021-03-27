/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const booksNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40001,
  miteString: `

# Begin Books Network Section

 books:
  driver: overlay

# End Books Network Section

`,
}
