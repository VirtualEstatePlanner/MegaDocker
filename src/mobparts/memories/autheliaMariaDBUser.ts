//  wordpressMariaDBUser.ts
//  MegaDocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const autheliaMariaDBUser: IMemory = {
  memoryIndex: 1002,
  memoryMarker: `[[AUTHELIAMARIADBUSER]]`,
  shouldAutocomplete: false,
  name: `Authelia MariaDB User`,
  tooltip: `Please enter your Authelia MariaDB username here`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
};