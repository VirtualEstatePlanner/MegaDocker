/** @format */

//  wordpressNetworkMite.ts
//  MegaDocker
//  Network Mite for WordPress
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const vsCodeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40061,
  miteString: `

# Begin VSCode Network Section

 vscode:
  driver: overlay

# End VSCode Network Section

  `,
}
