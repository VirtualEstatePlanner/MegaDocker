/** @format */

//  ldapAdminPassword.ts
//  MEGADocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const kibanaPassword: IMemory = {
  memoryIndex: 20018,
  memoryMarker: `[[KIBANAPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `Kibana Password`,
  tooltip: `The Kibana user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
