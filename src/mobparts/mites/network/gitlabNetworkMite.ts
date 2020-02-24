//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for GitLab
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const gitlabNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1004,
  miteString: `

#Begin Git Network Section

 git:
  driver: overlay

#End Git Network Section

`
};
