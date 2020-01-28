//  rocketchatBotUsername.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { emailValidator } from '../../functions/validators/emailValidator';

export let rocketchatBotUsername: IMemory = {
  memoryIndex: 5,
  name: `RocketChat bot user name`,
  tooltip: `Choose the username of the RocketChat bot.`,
  value: ``,
  isReady: false,
  validator: emailValidator
};
