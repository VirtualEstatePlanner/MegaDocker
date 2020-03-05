//  ldapAdminUsername.ts
//  MegaDocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noValidator } from '../../functions/validators/noValidator';

export const ldapOrganization: IMemory = {
  memoryIndex: 1018,
  memoryMarker: `[[LDAPORGANIZATION]]`,
  shouldAutocomplete: false,
  name: `LDAP Organization`,
  tooltip: `Choose the organization name for your LDAP server.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noValidator
};
