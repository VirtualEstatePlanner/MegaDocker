//  traefikServiceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const traefikServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2014,
  miteString: `

#Begin Traefik Service Section
  
  traefik:
   image: 
   networks:
    - 
   ports:
    - 
   volumes:
    - 
   environment:
    - 
   deploy:
    replicas: 
    placement:
    constraints:
     - node.role == manager
    labels:
     - 
#End Traefik Service Section
  
  `
};
