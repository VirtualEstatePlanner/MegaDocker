//  networkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../classes/IMite';

export const networkMite: IMite = {
  type: 'Network',
  miteString: `

#Begin $SOMEMANIKIN Network Section
 
 $SOMEMANIKIN:
  image: 
  ports:
  volumes:
  deploy:
  
#End $SOMEMANIKIN Network Section
  
  `
};
