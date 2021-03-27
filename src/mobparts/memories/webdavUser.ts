/** @format */

//  wordpressMariaDBUser.ts
//  MEGADocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const webdavUser: IMemory = {
  memoryIndex: 20044,
  memoryMarker: `[[WEBDAVUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: false,
  name: `WebDAV User`,
  tooltip: `The WebDAV user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
