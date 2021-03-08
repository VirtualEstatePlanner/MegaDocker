/** @format */

//  wordpressNetworkMite.ts
//  MegaDocker
//  Network Mite for WordPress
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite'

export const wordpressNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40032,
  miteString: `

# Begin WordPress Network Section
 
 wordpress:
  driver: overlay
  
# End WordPress Network Section
  
`,
}
