//  wordpressMariaDBRootPassword.ts
//  MegaDocker
//  The variable for the WordPress MariaDB's root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let wordpressMariaDBRootPassword: IManikinVariable = {
  name: `The root user password for the WordPress MariaDB instance`,
  tooltip: `Choose a password for WordPress's MariaDB server's root user.`,
  value: ``
};
