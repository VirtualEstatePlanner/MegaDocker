//  letsEncryptEmail.ts
//  MegaDocker
//  The variable for the usert's Let's Encrypt account email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { emailValidator } from '../../functions/validators/emailValidator';

export let letsEncryptEmail: IMemory = {
  memoryIndex: 9,
  name: `Let'sEncrypt Email`,
  tooltip: `The email address used to register your domains`,
  value: ``,
  valueType: 'email',
  isReady: false,
  validator: emailValidator
};
