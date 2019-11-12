//  IManikinWithPorts.ts
//  MegaDocker
//  an interface for a Manikin with ports
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '@renderer/components/IManikin';
import { IManikinPort } from '@renderer/components/IManikinPort';

export interface IManikinWithPorts extends IManikin {
  networkYML: string;
  ports: IManikinPort[];
}

export const emptyManikinWithPorts: IManikinWithPorts = {
  isSelected: false,
  name: 'unnamed Manikin object with ports',
  serviceYML: 'empty Manikin service',
  networkYML: 'empty Manikin network',
  ports: [{ portNumber: 80, isUDP: false }]
};
