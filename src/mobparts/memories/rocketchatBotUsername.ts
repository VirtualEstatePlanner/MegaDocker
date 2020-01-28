//  rocketchatBotUsername.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { usernameValidator } from '../../functions/validators/usernameValidator';

export let rocketchatBotUsername: IMemory = {
  memoryIndex: 5,
  name: `RocketChat bot user name`,
  tooltip: `Choose the username of the RocketChat bot.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: usernameValidator
};
