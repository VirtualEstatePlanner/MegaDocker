//  drupalPostgresUser.ts
//  MegaDocker
//  The variable for Drupal's Postgres username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';

export let drupalPostgresUser: IMemory = {
  memoryIndex: 15,
  name: `Drupal Postgres User`,
  tooltip: `Choose a username for Drupal to connect to it's PostgreSQL database.`,
  value: ``,
  isReady: false
};
