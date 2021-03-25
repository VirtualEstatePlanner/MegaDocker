/** @format */

//  rocketchatBotUsername.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const nextcloudMariaDBUser: IMemory = {
  memoryIndex: 20031,
  memoryMarker: `[[NEXTCLOUDMARIADBUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: false,
  name: `Nextcloud MariaDB User`,
  tooltip: `The Nextcloud MariDB user.`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
