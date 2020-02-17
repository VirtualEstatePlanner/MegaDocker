//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const rocketchatNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1011,
  miteString: `

#Begin RocketChat Network Section

 rocketchat:
  external: true

#End RocketChat Network Section

`
};
