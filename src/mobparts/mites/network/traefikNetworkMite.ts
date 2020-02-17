//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const traefikNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1014,
  miteString: `

#Begin Traefik Network Section
 
 traefik:
  driver: overlay
  name: traefik
 
#End Traefik Network Section
  
  `
};
