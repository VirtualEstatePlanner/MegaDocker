/** @format */

//  ldapAdminUsername.ts
//  MEGADocker
//  The variable for the LDAP administrative user's username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
// import { noWhitespaceValidator } from '../../functions/validators/noWhitespaceValidator';
import { noValidator } from '../../functions/validators/noValidator'

export const ldapOrganisation: IMemory = {
  memoryIndex: 20023,
  memoryMarker: `[[LDAPORGANISATION]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `LDAP Organisation Name`,
  tooltip: `The top-level LDAP organization`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  // TODO: create a validator that allows whitespace
  validator: noValidator
}
