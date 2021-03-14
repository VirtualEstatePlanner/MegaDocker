/** @format */

//  wordpressMariaDBRootPassword.ts
//  MegaDocker
//  The variable for the WordPress MariaDB's root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const kanboardMariaDBRootPassword: IMemory = {
  memoryIndex: 20014,
  memoryMarker: `[[KANBOARDMARIADBROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Kanboard MariaDB Root Password`,
  tooltip: `Please enter your Kanboard MariaDB Root Password here`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
