/** @format */

//  wordpressMariaDBUser.ts
//  MEGADocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const kanboardMariaDBUser: IMemory = {
  memoryIndex: 20017,
  memoryMarker: `[[KANBOARDMARIADBUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Kanboard MariaDB User`,
  tooltip: `The Kanboard MariaDB user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
