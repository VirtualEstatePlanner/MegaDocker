//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for Ghost
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ghostNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1006,
  miteString: `

#Begin Ghost Network Section

 ghost:
  driver: overlay

#End Ghost Network Section

`,
};
