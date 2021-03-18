/** @format */

//  wordpressMariaDBPassword.ts
//  MEGADocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const kanboardMariaDBPassword: IMemory = {
  memoryIndex: 20013,
  memoryMarker: `[[KANBOARDMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Kanboard MariaDB Password`,
  tooltip: `Please enter your Kanboard MariaDB Password here`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
