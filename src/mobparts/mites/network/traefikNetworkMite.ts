//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const traefikNetworkMite: IMite = {
  type: 'Network',
  miteString: `

#Begin Traefik Network Section
 
 traefik:
  image: traefik:latest
  ports:
   - 80:80
   - 443:443
  volumes:
  deploy:
  
#End $SOMEMANIKIN Network Section
  
  `
};
