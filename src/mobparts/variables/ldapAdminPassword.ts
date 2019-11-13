//  ldapAdminPassword.ts
//  MegaDocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';
import { ldapAdminUsername } from './ldapAdminUsername';

export let ldapAdminPassword: IManikinVariable = {
  name: `LDAP Administrator account password`,
  tooltip: `Choose the password for the LDAP server administrative user (${ldapAdminUsername.value})`,
  value: ``
};
