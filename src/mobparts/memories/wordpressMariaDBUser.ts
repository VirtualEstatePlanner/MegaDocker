/** @format */

//  wordpressMariaDBUser.ts
//  MEGADocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const wordpressMariaDBUser: IMemory = {
  memoryIndex: 20047,
  memoryMarker: `[[WORDPRESSMARIADBUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `WP MariaDB User`,
  tooltip: `The WordPress MariaDB user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
