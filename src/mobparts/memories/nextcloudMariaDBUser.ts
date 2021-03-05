/** @format */

//  rocketchatBotUsername.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const nextcloudMariaDBUser: IMemory = {
  memoryIndex: 20031,
  memoryMarker: `[[NEXTCLOUDMARIADBUSER]]`,
  shouldAutocomplete: false,
  name: `Nextcloud MariaDB User`,
  tooltip: `Choose the username nextcloud will use to connect to it's MariDB database.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
