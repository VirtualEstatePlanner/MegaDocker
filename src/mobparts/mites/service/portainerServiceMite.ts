//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const portainerServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2009,
  miteString: `

  #Begin Portainer Service Section
  
  #End Portainer Service Section
  
  `
};
