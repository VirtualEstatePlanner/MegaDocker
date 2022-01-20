/** @format */

//  opensourcePOSMariaDBUser.ts
//  MEGADocker
//  The user opensourcePOS will use to connect to it's MariaDB database
//  Created by George Georgulas IV on 3/5/2021.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const opensourcePOSMariaDBUser: IMemory = {
  memoryIndex: 20040,
  memoryMarker: `[[OPENSOURCEPOSMARIADBUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `osPOS MariaDB User`,
  tooltip: `The osPOS MariaDB user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
