//  rocketchatBotPassword.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { rocketchatBotUsername } from './rocketchatBotUsername';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export let rocketchatBotPassword: IMemory = {
  memoryIndex: 6,
  shouldAutocomplete: false,
  name: `RocketChat bot user name`,
  tooltip: `Choose the password of the RocketChat bot user (${rocketchatBotUsername.value}).`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
