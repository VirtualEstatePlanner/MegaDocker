//  serviceMite.ts
//  MegaDocker
//  Network Mite for Nginx
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const nginxNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1009,
  miteString: `

#Begin Nginx Network Section

 nginx:
  driver: overlay

#End Nginx Network Section

`
};
