/** @format */

//  ldapConfigurationPassword.ts
//  MEGADocker
//  The variable for the LDAP server's configuration password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const ldapConfigurationPassword: IMemory = {
  memoryIndex: 20022,
  memoryMarker: `[[LDAPCONFIGURATIONPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `LDAP Configuration Password`,
  tooltip: `The LDAP configuration password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
