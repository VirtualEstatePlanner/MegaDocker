//  drupalPostgresPassword.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';

export let drupalPostgresPassword: IMemory = {
  memoryIndex: 16,
  name: `Drupal Postgres Password`,
  tooltip: `Choose a password for Drupal to connect to it's PostgreSQL database.`,
  value: ``,
  isReady: false
};
