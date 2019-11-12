//  IManikinWithPortsAndVariables.ts
//  MegaDocker
//  an interface for a Manikin with ports and variables
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { emptyManikinPort } from '@renderer/components/IManikinPort';
import { emptyManikinVariable } from '@renderer/components/IManikinVariable';
import { IManikinWithPorts } from '@renderer/components/IManikinWithPorts';
import { IManikinWithVariables } from '@renderer/components/IManikinWithVariables';

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
