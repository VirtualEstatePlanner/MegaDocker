/** @format */

//  opensourcePOSMariaDBRootPassword.ts
//  MEGADocker
//  The root password for opensourcePOS's MariaDB instance
//  Created by George Georgulas IV on 3/5/2021.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const opensourcePOSMariaDBRootPassword: IMemory = {
  memoryIndex: 20039,
  memoryMarker: `[[OPENSOURCEPOSMARIADBROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `osPOS MariaDB Root Password`,
  tooltip: `The root password for osPOS's MariaDB instance`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
