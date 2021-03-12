/** @format */

//  wordpressMariaDBPassword.ts
//  MegaDocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const wordpressMariaDBPassword: IMemory = {
  memoryIndex: 20045,
  memoryMarker: `[[WORDPRESSMARIADBPASSWORD]]`,
  shouldAutocomplete: false,
  name: `WP MariaDB password`,
  tooltip: `Please enter your WordPress MariaDB Password here`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator(),
}
