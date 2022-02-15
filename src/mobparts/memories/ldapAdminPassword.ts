/** @format */

//  ldapAdminPassword.ts
//  MEGADocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const ldapAdminPassword: IMemory = {
  memoryIndex: 20020,
  memoryMarker: `[[LDAPADMINPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `LDAP Admin Password`,
  tooltip: `The LDAP admin user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
