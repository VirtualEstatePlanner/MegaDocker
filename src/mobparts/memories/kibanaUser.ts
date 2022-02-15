/** @format */

//  ghostRootMariaDBPassword.ts
//  MEGADocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const kibanaUser: IMemory = {
  memoryIndex: 20019,
  memoryMarker: `[[KIBANAUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Kibana User`,
  tooltip: `The Kibana user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
