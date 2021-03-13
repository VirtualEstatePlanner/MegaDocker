/** @format */

//  autheliaMariaDBRootPassword.ts
//  MegaDocker
//  The variable for authelia's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const autheliaMariaDBRootPassword: IMemory = {
  memoryIndex: 20001,
  memoryMarker: `[[AUTHELIAMARIADBROOTPASSWORD]]`,
  shouldAutocomplete: false,
  name: `Authelia MariaDB root password`,
  tooltip: `The password for the Authelia MariaDB root user`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
