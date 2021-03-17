/** @format */

//  autheliaMariaDBPassword.ts
//  MegaDocker
//  The variable for authelia's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const autheliaMariaDBPassword: IMemory = {
  memoryIndex: 20000,
  memoryMarker: `[[AUTHELIAMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Authelia MariaDB Password`,
  tooltip: `The password for the Authelia MariaDB user`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
