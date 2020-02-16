//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const nginxNetworkMite: IMite = {
  type: 'Network',
  miteIndex: 1007,
  miteString: `

  #Begin Nginx Network Section
  
  #End Nginx Network Section
  
  `
};
