//  httpsPortUDP.ts
//  MegaDocker
//  a port to expose https on 443
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinPort } from '../../classes/IManikinPort';

export const httpsPortUDP: IManikinPort = {
  externalPort: 443,
  internalPort: 443,
  isUDP: false
};
