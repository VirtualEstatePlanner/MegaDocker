//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const owncloudNetworkMite: IMite = {
  type: 'Network',
  miteIndex: 1008,
  miteString: `

#Begin Owncloud Network Section

 owncloud:
  external: true

#End Owncloud Network Section

`
};
