/** @format */

//  autheliaMariaDBPassword.ts
//  MEGADocker
//  The variable for authelia's MariaDB user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const autheliaMariaDBPassword: IMemory = {
  memoryIndex: 20000,
  memoryMarker: `[[AUTHELIAMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `Authelia MariaDB Password`,
  tooltip: `The password for the Authelia MariaDB user`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
