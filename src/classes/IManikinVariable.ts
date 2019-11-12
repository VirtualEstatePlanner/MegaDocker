//  ManikinPort.ts
//  MegaDocker
//  an ojbect class that represents a port used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IManikinVariable {
  name: string;
  tooltip: string;
  value: string;
}

export const emptyManikinVariable: IManikinVariable = {
  name: 'empty Manikin Variable name',
  tooltip: 'empty Manikin Variable tooltip',
  value: 'empty Manikin Variable value'
};
