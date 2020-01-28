//  ldapAdminPassword.ts
//  MegaDocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { ldapAdminUsername } from './ldapAdminUsername';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export let ldapAdminPassword: IMemory = {
  memoryIndex: 13,
  shouldAutocomplete: false,
  name: `LDAP Administrator account password`,
  tooltip: `Choose the password for the LDAP server administrative user (${ldapAdminUsername.value})`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
