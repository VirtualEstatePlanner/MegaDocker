//  cloudflareEmail.ts
//  MegaDocker
//  The variable for the user's CloudFlare Email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { emailValidator } from '../../functions/validators/emailValidator';

export const cloudflareEmail: IMemory = {
  memoryIndex: 20005,
  memoryMarker: `[[CLOUDFLAREEMAIL]]`,
  shouldAutocomplete: true,
  name: `CloudFlare Email`,
  tooltip: `The email address of your CloudFlare account`,
  value: ``,
  valueType: 'email',
  isReady: false,
  validator: emailValidator,
};
