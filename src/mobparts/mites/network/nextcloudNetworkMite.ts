//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const nextcloudNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1006,
  miteString: `

#Begin Nextcloud Network Section

 nextcloud:
  external: true

#End Nextcloud Network Section

`
};
