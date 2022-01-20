/** @format */

//  wordpressMariaDBPassword.ts
//  MEGADocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const wordpressMariaDBPassword: IMemory = {
  memoryIndex: 20049,
  memoryMarker: `[[WORDPRESSMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `WordPress MariaDB Password`,
  tooltip: `The WordPress MariaDB user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
