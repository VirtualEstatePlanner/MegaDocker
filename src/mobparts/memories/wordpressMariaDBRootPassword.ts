//  wordpressMariaDBRootPassword.ts
//  MegaDocker
//  The variable for the WordPress MariaDB's root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';

export let wordpressMariaDBRootPassword: IMemory = {
  memoryIndex: 3,
  name: `The root user password for the WordPress MariaDB instance`,
  tooltip: `Choose a password for WordPress's MariaDB server's root user.`,
  value: ``,
  isReady: false
};
