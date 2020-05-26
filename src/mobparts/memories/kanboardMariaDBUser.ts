//  wordpressMariaDBUser.ts
//  MegaDocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const kanboardMariaDBUser: IMemory = {
  memoryIndex: 1015,
  memoryMarker: `[[KANBOARDMARIADBUSER]]`,
  shouldAutocomplete: false,
  name: `Kanboard MariaDB User`,
  tooltip: `Please enter your Kanboard MariaDB username here`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
};
