/** @format */

//  autheliaRedisUser.ts
//  MEGADocker
//  The variable for the authelia Redis username
//  Created by George Georgulas IV on 3/29/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const autheliaRedisUser: IMemory = {
  memoryIndex: 20004,
  memoryMarker: `[[AUTHELIAREDISUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `Authelia Redis User`,
  tooltip: `The Authelia Redis user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
