//  drupalNetworkMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const backupNetworkMite: IMite = {
  type: 'Network',
  miteIndex: 0,
  miteString: `

#Begin Backup Network Section

 backup:
  external: true

#End Backup Network Section

`
};
