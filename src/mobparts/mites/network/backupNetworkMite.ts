//  drupalNetworkMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const backupNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1000,
  miteString: `

#Begin Backup Network Section

 backup:
  external: true

#End Backup Network Section

`
};
