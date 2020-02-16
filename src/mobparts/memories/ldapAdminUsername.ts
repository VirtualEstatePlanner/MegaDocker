//  ldapAdminUsername.ts
//  MegaDocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { usernameValidator } from '../../functions/validators/usernameValidator';

export const ldapAdminUsername: IMemory = {
  memoryIndex: 1010,
  shouldAutocomplete: false,
  name: `LDAP Admin username`,
  tooltip: `Choose the administrator username for your LDAP server.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: usernameValidator
};
