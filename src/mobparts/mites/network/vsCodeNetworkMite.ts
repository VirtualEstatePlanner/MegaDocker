/** @format */

//  wordpressNetworkMite.ts
//  MEGADocker
//  Network Mite for WordPress
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const vsCodeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40030,
  miteString: `

# Begin VSCode Network Section

 vscode:
  driver: overlay

# End VSCode Network Section

  `
}
