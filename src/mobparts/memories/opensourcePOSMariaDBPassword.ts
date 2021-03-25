/** @format */

//  opensourcePOSMariaDBPassword.ts
//  MEGADocker
//  The password that opensourcePOS will use to connect to it's MariaDB database
//  Created by George Georgulas IV on 3/5/2021.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const opensourcePOSMariaDBPassword: IMemory = {
  memoryIndex: 20034,
  memoryMarker: `[[OPENSOURCEPOSMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `osPOS MariaDB Password`,
  tooltip: `The osPOS MariaDB user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
