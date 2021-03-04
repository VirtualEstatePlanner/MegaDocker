//  ldapAdminPassword.ts
//  MegaDocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const ledgerPostgresPassword: IMemory = {
  memoryIndex: 20022,
  memoryMarker: `[[LEDGERPOSTGRESPASSWORD]]`,
  shouldAutocomplete: false,
  name: `Ledger Postgres Password`,
  tooltip: `Choose the password for Ledger to connect to it's Postgres database`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
};
