/** @format */

//  plexListenerPort.ts
//  MEGADocker
//  an ojbect class that represents a port used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikinPort } from '../../interfaces/objectInterfaces/IManikinPort'

export const plexListenerPort: IManikinPort = {
  externalPort: 32400,
  internalPort: 32400,
  isUDP: false,
}
