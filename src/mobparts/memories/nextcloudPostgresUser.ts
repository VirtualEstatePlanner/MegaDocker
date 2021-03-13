/** @format */

//  rocketchatBotUsername.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const nextcloudPostgresUser: IMemory = {
  memoryIndex: 20033,
  memoryMarker: `[[NEXTCLOUDPOSTGRESUSER]]`,
  shouldAutocomplete: false,
  name: `Nextcloud Postgres User`,
  tooltip: `Choose the user Nextcloud will use to connect to it's Postgres database.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
