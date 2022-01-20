/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for GitLab
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const gitlabNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40007,
  miteString: `

# Begin GitLab Network Section

 gitlab:
  driver: overlay

# End GitLab Network Section

`
}
