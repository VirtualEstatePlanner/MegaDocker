/** @format */

//  rocketchatBotUsername.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const nextcloudMariaDBUser: IMemory = {
  memoryIndex: 20035,
  memoryMarker: `[[NEXTCLOUDMARIADBUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `Nextcloud MariaDB User`,
  tooltip: `The Nextcloud MariDB user.`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
