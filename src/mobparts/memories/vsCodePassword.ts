/** @format */

//  ldapAdminPassword.ts
//  MEGADocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const vsCodePassword: IMemory = {
  memoryIndex: 20042,
  memoryMarker: `[[VSCODEPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `VS Code Password`,
  tooltip: `Choose the password to access VS Code through noVNC`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
