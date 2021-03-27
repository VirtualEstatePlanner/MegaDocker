/** @format */

//  autheliaMariaDBUser.ts
//  MEGADocker
//  The variable for the authelia MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const autheliaMariaDBUser: IMemory = {
  memoryIndex: 20002,
  memoryMarker: `[[AUTHELIAMARIADBUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Authelia MariaDB User`,
  tooltip: `The Authelia MariaDB user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
