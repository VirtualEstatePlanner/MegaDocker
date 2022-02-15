/** @format */

//  IManikinPort.ts
//  MEGADocker
//  an interface that represents a port used by a Manikin - a network port a manikin requires
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

export interface IManikinPort {
  externalPort: number
  internalPort?: number
  isUDP: boolean
}
