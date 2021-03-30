/** @format */

//  rocketchatBotUsername.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const ledgerPostgresUser: IMemory = {
  memoryIndex: 20025,
  memoryMarker: `[[LEDGERPOSTGRESUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Ledger Postgres User`,
  tooltip: `The LedgerSMB Postgres user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
