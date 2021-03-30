/** @format */

//  wordpressMariaDBPassword.ts
//  MEGADocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const kanboardMariaDBPassword: IMemory = {
  memoryIndex: 20015,
  memoryMarker: `[[KANBOARDMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Kanboard MariaDB Password`,
  tooltip: `The Kanboard MariaDB user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
