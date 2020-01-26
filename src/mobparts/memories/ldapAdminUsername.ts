//  ldapAdminUsername.ts
//  MegaDocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';

export let ldapAdminUsername: IMemory = {
  name: `LDAP Administrator account user name`,
  tooltip: `Choose the administrator username for your LDAP server.`,
  value: ``
};
