//  cloudflareAPIKey.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export let cloudflareAPIKey: IMemory = {
  memoryIndex: 0,
  name: `CloudFlare API Key`,
  tooltip: `A CloudFlare API Key from your account that has full 'domain' privileges.`,
  value: ``,
  isReady: false,
  validator: passwordValidator
};
