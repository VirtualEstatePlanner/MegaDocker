/** @format */

//  rocketchatBotUsername.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const nextcloudPostgresUser: IMemory = {
  memoryIndex: 20033,
  memoryMarker: `[[NEXTCLOUDPOSTGRESUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: false,
  name: `Nextcloud Postgres User`,
  tooltip: `The Nextcloud Postgres user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
