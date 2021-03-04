//  n8nNetworkMite.ts
//  MegaDocker
//  Network Mite for n8n
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const n8nNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40017,
  miteString: `

# Begin n8n Network Section

 n8n:
  driver: overlay

# End n8n Network Section

`,
};
