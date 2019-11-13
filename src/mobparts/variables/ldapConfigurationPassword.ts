//  ldapConfigurationPassword.ts
//  MegaDocker
//  The variable for the LDAP server's configuration password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let ldapConfigurationPassword: IManikinVariable = {
  name: `LDAP Configuration Password`,
  tooltip: `Choose a configuration password for the LDAP server.`,
  value: ``
};
