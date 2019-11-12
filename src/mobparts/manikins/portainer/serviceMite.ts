//  $SOMEMANIKINServiceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../classes/IMite';

export const $SOMEMANIKINService: IMite = {
  type: 'Service',
  miteString: `

#Begin $SOMEMANIKIN Service Section
  
 $SOMEMANIKIN:
  driver: overlay
  
#End $SOMEMANIKIN Service Section
  
  `
};
