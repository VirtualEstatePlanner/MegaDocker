/** @format */

//  rocketchatBotPassword.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const rocketchatBotPassword: IMemory = {
  memoryIndex: 20041,
  memoryMarker: `[[ROCKETCHATBOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `RocketChat Bot Password`,
  tooltip: `The RocketChat bot user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
