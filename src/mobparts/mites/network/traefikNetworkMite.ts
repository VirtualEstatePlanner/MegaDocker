//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const traefikNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1027,
  miteString: `

# Begin Traefik Network Section

 traefik:
  driver: overlay

# End Traefik Network Section

`,
};
