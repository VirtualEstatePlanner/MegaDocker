//  wordpressMariaDBPassword.ts
//  MegaDocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { emailValidator } from '../../functions/validators/emailValidator';

export let wordpressMariaDBPassword: IMemory = {
  memoryIndex: 4,
  name: `The password WordPress will use to access it's MariaDB database`,
  tooltip: `You must choose this password.`,
  value: ``,
  isReady: false,
  validator: emailValidator
};
