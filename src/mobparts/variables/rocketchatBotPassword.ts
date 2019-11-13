//  rocketchatBotPassword.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';
import { rocketchatBotUsername } from './rocketchatBotUsername';

export let rocketchatBotPassword: IManikinVariable = {
  name: `RocketChat bot user name`,
  tooltip: `Choose the password of the RocketChat bot user (${rocketchatBotUsername.value}).`,
  value: ``
};
