/** @format */

//  emailNetworkMite.ts
//  MEGADocker
//  Network Mite for email server
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const emailNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40005,
  miteString: `

# Begin email Network Section

 email:
  driver: overlay

# End email Network Section

`,
}
