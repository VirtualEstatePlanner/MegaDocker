//  wordpressNetworkMite.ts
//  MegaDocker
//  Network Mite for WordPress
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const vsCodeNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1025,
  miteString: `

# Begin VS Code Network Section
 
 vscode:
  driver: overlay
  
# End VS Code Network Section
  
  `,
};
