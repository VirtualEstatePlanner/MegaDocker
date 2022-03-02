/** @format */

//  rocketchatBotUsername.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const rocketchatBotUsername: IMemory = {
  memoryIndex: 20044,
  memoryMarker: `[[ROCKETCHATBOTUSERNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `RocketChat Bot User`,
  tooltip: `The RocketChat bot user`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
