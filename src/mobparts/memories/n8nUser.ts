/** @format */

//  n8nUser.ts
//  MEGADocker
//  The variable for the n8n user name
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const n8nUser: IMemory = {
  memoryIndex: 20032,
  memoryMarker: `[[N8NUSERNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `n8n User`,
  tooltip: `The n8n admin user`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
