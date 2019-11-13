//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../classes/IMite';

export const serviceMite: IMite = {
  type: 'Service',
  miteString: `

#Begin $SOMEMANIKIN Service Section
  
  $SOMEMANIKIN:
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
