//  rocketchatBotPassword.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const rocketchatBotPassword: IMemory = {
  memoryIndex: 20036,
  memoryMarker: `[[ROCKETCHATBOTPASSWORD]]`,
  shouldAutocomplete: false,
  name: `RocketChat bot password`,
  tooltip: `Choose the password of the RocketChat bot user.`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
};
