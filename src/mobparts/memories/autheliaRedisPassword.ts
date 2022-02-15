/** @format */

//  autheliaRedisPassword.ts
//  MEGADocker
//  The variable for authelia's Redis user's password
//  Created by George Georgulas IV on 3/29/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const autheliaRedisPassword: IMemory = {
  memoryIndex: 20003,
  memoryMarker: `[[AUTHELIAREDISPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Authelia Redis Password`,
  tooltip: `The password for the Authelia Redis user`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
