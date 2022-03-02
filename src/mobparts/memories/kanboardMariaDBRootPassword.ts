/** @format */

//  wordpressMariaDBRootPassword.ts
//  MEGADocker
//  The variable for the WordPress MariaDB's root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const kanboardMariaDBRootPassword: IMemory = {
  memoryIndex: 20016,
  memoryMarker: `[[KANBOARDMARIADBROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `Kanboard MariaDB Root Password`,
  tooltip: `The Kanboard MariaDB root user's password`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
