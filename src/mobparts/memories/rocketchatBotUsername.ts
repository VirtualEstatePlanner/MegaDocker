/** @format */

//  rocketchatBotUsername.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const rocketchatBotUsername: IMemory = {
  memoryIndex: 20042,
  memoryMarker: `[[ROCKETCHATBOTUSERNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `RocketChat Bot User`,
  tooltip: `The RocketChat bot user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
