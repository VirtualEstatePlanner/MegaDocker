//  wordpressMariaDBPassword.ts
//  MegaDocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const webdavPassword: IMemory = {
  memoryIndex: 1040,
  memoryMarker: `[[WEBDAVPASSWORD]]`,
  shouldAutocomplete: false,
  name: `WebDAV password`,
  tooltip: `Please the password to access WebDav here`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
};
