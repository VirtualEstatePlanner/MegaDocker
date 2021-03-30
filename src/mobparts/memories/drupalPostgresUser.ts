/** @format */

//  drupalPostgresUser.ts
//  MEGADocker
//  The variable for Drupal's Postgres username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const drupalPostgresUser: IMemory = {
  memoryIndex: 20009,
  memoryMarker: `[[DRUPALPOSTGRESUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Drupal Postgres User`,
  tooltip: `The Drupal Postgres user`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
}
