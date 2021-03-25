/** @format */

//  ghostRootMariaDBPassword.ts
//  MEGADocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const ghostMariaDBRootPassword: IMemory = {
  memoryIndex: 20008,
  memoryMarker: `[[GHOSTMARIADBROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Ghost MariaDB Root Password`,
  tooltip: `The password for the Ghost MariaDB root user`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
