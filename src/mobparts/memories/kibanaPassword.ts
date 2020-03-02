//  ldapAdminPassword.ts
//  MegaDocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const kibanaPassword: IMemory = {
  memoryIndex: 1013,
  memoryMarker: `[[KIBANAPASSWORD]]`,
  shouldAutocomplete: false,
  name: `Kibana Password`,
  tooltip: `Choose the password to login to Kibana`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};