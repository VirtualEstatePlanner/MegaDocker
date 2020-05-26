//  cloudflareAPIKey.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { cloudflareApiTokenValidator } from '../../functions/validators/cloudflareApiTokenValidator';

export const cloudflareAPIKey: IMemory = {
  memoryIndex: 1003,
  memoryMarker: `[[CLOUDFLAREAPIKEY]]`,
  shouldAutocomplete: false,
  name: `CloudFlare API Key`,
  tooltip: `A CloudFlare API Key from your account that has full 'domain' privileges.`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: cloudflareApiTokenValidator,
};
