/** @format */

//  ldapAdminUsername.ts
//  MegaDocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
// import { noWhitespaceValidator } from '../../functions/validators/noWhitespaceValidator';
import { noValidator } from '../../functions/validators/noValidator'

export const ldapOrganisation: IMemory = {
  memoryIndex: 20021,
  memoryMarker: `[[LDAPORGANISATION]]`,
  shouldAutocomplete: false,
  name: `LDAP Organisation`,
  tooltip: `Choose the organization name for your LDAP server.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  // TODO: create a validator that allows whitespace
  validator: noValidator,
}
