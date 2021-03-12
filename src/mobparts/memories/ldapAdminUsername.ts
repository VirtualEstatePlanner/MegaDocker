/** @format */

//  ldapAdminUsername.ts
//  MegaDocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const ldapAdminUsername: IMemory = {
  memoryIndex: 20019,
  memoryMarker: `[[LDAPADMINUSERNAME]]`,
  shouldAutocomplete: false,
  name: `LDAP Admin username`,
  tooltip: `Choose the administrator username for your LDAP server.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator(),
}
