//  VARIABLENAME.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { nowhitespaceValidator } from '../../functions/validators/nowhitespaceValidator';

export let VARIABLENAME: IMemory = {
  memoryIndex: 99,
  name: ``,
  tooltip: ``,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: nowhitespaceValidator
};
