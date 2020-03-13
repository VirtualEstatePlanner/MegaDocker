//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for OwnCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ombiNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1010,
  miteString: `

# Begin Ombi Network Section

 ombi:
  driver: overlay

# End Ombi Network Section

`
};
