/** @format */

//  n8nUser.ts
//  MEGADocker
//  The variable for the n8n user name
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const n8nUser: IMemory = {
  memoryIndex: 20030,
  memoryMarker: `[[N8NUSERNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `n8n User`,
  tooltip: `The n8n admin user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
