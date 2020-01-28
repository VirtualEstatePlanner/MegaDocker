//  rocketchatBotPassword.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { rocketchatBotUsername } from './rocketchatBotUsername';
import { emailValidator } from '../../functions/validators/emailValidator';

export let rocketchatBotPassword: IMemory = {
  memoryIndex: 6,
  name: `RocketChat bot user name`,
  tooltip: `Choose the password of the RocketChat bot user (${rocketchatBotUsername.value}).`,
  value: ``,
  isReady: false,
  validator: emailValidator
};
