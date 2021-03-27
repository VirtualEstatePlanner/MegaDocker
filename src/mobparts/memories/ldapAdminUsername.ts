/** @format */

//  ldapAdminUsername.ts
//  MEGADocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const ldapAdminUsername: IMemory = {
  memoryIndex: 20019,
  memoryMarker: `[[LDAPADMINUSERNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: false,
  name: `LDAP Admin User`,
  tooltip: `The LDAP admin user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
