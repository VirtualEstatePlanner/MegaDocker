//  ManikinPort.ts
//  MegaDocker
//  an ojbect class that represents a port used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IManikinPort {
  portNumber: number;
  isUDP: Boolean;
}

export const emptyManikinPort: IManikinPort = { portNumber: 80, isUDP: false };
