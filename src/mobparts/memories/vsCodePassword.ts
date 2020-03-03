//  ldapAdminPassword.ts
//  MegaDocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const vsCodePassword: IMemory = {
  memoryIndex: 1028,
  memoryMarker: `[[VSCODEPASSWORD]]`,
  shouldAutocomplete: false,
  name: `VS Code Password`,
  tooltip: `Choose the password to access VS Code`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
