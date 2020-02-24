//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for Portainer
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const portainerNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1009,
  miteString: `

#Begin Portainer Network Section

 portainer:
  driver: overlay

#End Portainer Network Section

`
};
