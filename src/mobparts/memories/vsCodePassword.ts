/** @format */

//  ldapAdminPassword.ts
//  MEGADocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const vsCodePassword: IMemory = {
  memoryIndex: 20044,
  memoryMarker: `[[VSCODEPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `VS Code Password`,
  tooltip: `The VS Code user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
