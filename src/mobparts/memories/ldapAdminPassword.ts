//  ldapAdminPassword.ts
//  MegaDocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { ldapAdminUsername } from './ldapAdminUsername';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const ldapAdminPassword: IMemory = {
  memoryIndex: 1010,
  memoryMarker: `[[LDAPADMINPASSWORD]]`,
  shouldAutocomplete: false,
  name: `LDAP Admin password`,
  tooltip: `Choose the password for the LDAP server administrative user (${ldapAdminUsername.value})`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
