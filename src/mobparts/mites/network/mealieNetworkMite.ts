//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for NextCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const mealieNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1013,
  miteString: `

# Begin Mealie Network Section

 mealie:
  driver: overlay

# End Mealie Network Section

`,
};
