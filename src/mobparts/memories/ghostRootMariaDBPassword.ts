//  ghostRootMariaDBPassword.ts
//  MegaDocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const ghostRootMariaDBPassword: IMemory = {
  memoryIndex: 1008,
  shouldAutocomplete: false,
  name: `Ghost MariaDB SQL root user password`,
  tooltip: `The password for the Ghost root user`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
