//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ghostNetworkMite: IMite = {
  type: 'Network',
  miteIndex: 1,
  miteString: `

#Begin Ghost Network Section

 ghost:
  external: true

#End Ghost Network Section

`
};
