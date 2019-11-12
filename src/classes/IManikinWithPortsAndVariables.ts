//  IManikinWithPortsAndVariables.ts
//  MegaDocker
//  an interface for a Manikin with ports and variables
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { emptyManikinPort } from './IManikinPort';
import { emptyManikinVariable } from './IManikinVariable';
import { IManikinWithPorts } from './IManikinWithPorts';
import { IManikinWithVariables } from './IManikinWithVariables';

export interface IManikinWithPortsAndVariables
  extends IManikinWithPorts,
    IManikinWithVariables {}

export const emptyManikinWithPortsAndVariables: IManikinWithPortsAndVariables = {
  isSelected: false,
  name: 'unnamed Manikin object with ports and variables',
  serviceYML: 'empty Manikin service',
  networkYML: 'empty Manikin network',
  ports: [emptyManikinPort],
  variables: [emptyManikinVariable]
};
