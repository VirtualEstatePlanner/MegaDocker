/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for ELK
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const elkNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40004,
  miteString: `

# Begin ELK Network Section

 elk:
  driver: overlay

# End ELK Network Section

`,
}
