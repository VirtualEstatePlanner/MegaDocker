/** @format */

//  httpsPort.ts
//  MEGADocker
//  a port to expose https on 443
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikinPort } from '../../interfaces/objectInterfaces/IManikinPort'

export const httpsPort: IManikinPort = {
  externalPort: 443,
  internalPort: 443,
  isUDP: false
}
