//  n8nUser.ts
//  MegaDocker
//  The variable for the n8n user name
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const n8nUser: IMemory = {
  memoryIndex: 1028,
  memoryMarker: `[[N8NUSERNAME]]`,
  shouldAutocomplete: false,
  name: `n8n user name`,
  tooltip: `Choose a username for the n8n administrator`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
};
