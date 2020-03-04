//  wordpressMariaDBUser.ts
//  MegaDocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const webdavUser: IMemory = {
  memoryIndex: 1031,
  memoryMarker: `[[WEBDAVUSER]]`,
  shouldAutocomplete: false,
  name: `WebDAV User`,
  tooltip: `Please enter the username to access WebDAV here`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
};
