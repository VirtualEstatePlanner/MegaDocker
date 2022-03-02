/** @format */

//  wordpressMariaDBRootPassword.ts
//  MEGADocker
//  The variable for the WordPress MariaDB's root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const wordpressMariaDBRootPassword: IMemory = {
  memoryIndex: 20050,
  memoryMarker: `[[WORDPRESSMARIADBROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `WordPress MariaDB Root Password`,
  tooltip: `The WordPress root user's password`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
