//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const elkNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1002,
  miteString: `

#Begin ELK Network Section

 elk:
  external: true

#End ELK Network Section

`
};
