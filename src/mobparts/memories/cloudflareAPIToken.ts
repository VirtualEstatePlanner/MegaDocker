//  cloudflareEmail.ts
//  MegaDocker
//  The variable for the user's CloudFlare Email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { cloudflareApiTokenValidator } from '../../functions/validators/cloudflareApiTokenValidator';

export const cloudflareAPIToken: IMemory = {
  memoryIndex: 1001,
  memoryMarker: `[[CLOUDFLAREAPITOKEN]]`,
  shouldAutocomplete: true,
  name: `CloudFlare Token`,
  tooltip: `A CloudFlare API token with "DNS: Edit" and "Zone: Read" privileges for your domains`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: cloudflareApiTokenValidator
};