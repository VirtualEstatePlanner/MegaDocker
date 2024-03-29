/** @format */

//  ldapAdminUsername.ts
//  MEGADocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const ldapAdminUsername: IMemory = {
  memoryIndex: 20021,
  memoryMarker: `[[LDAPADMINUSERNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `LDAP Admin User`,
  tooltip: `The LDAP admin user`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
