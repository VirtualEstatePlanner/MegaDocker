//  wordpressMariaDBRootPassword.ts
//  MegaDocker
//  The variable for the WordPress MariaDB's root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const wordpressMariaDBRootPassword: IMemory = {
  memoryIndex: 1014,
  memoryMarker: `[[WORDPRESSMARIADBROOTPASSWORD]]`,
  shouldAutocomplete: false,
  name: `WP MariaDB Root Password`,
  tooltip: `Please enter your WordPress MariaDb Root Password here`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
