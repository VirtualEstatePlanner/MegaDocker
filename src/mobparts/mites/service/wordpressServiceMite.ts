//  wordpressServiceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../classes/IMite';

export const wordpressServiceMite: IMite = {
  type: 'Service',
  miteString: `

#Begin $SOMEMANIKIN Service Section
  
  wordpress:
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
#End $SOMEMANIKIN Service Section
  
  `
};
