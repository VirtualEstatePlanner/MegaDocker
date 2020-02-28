//  drupalPostgresUser.ts
//  MegaDocker
//  The variable for Drupal's Postgres username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const drupalPostgresUser: IMemory = {
  memoryIndex: 1004,
  memoryMarker: `[[DRUPALPOSTGRESUSER]]`,
  shouldAutocomplete: false,
  name: `Drupal Postgres User`,
  tooltip: `Choose a username for Drupal to connect to it's PostgreSQL database.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
};
