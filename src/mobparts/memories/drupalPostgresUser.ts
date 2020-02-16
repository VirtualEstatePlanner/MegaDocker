//  drupalPostgresUser.ts
//  MegaDocker
//  The variable for Drupal's Postgres username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { usernameValidator } from '../../functions/validators/usernameValidator';

export const drupalPostgresUser: IMemory = {
  memoryIndex: 1006,
  shouldAutocomplete: false,
  name: `Drupal Postgres User`,
  tooltip: `Choose a username for Drupal to connect to it's PostgreSQL database.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: usernameValidator
};
