/** @format */

//  cloudflareEmail.ts
//  MEGADocker
//  The variable for the user's CloudFlare Email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { cloudflareApiTokenValidator } from '../../functions/validators/cloudflareApiTokenValidator'

export const cloudflareAPIToken: IMemory = {
  memoryIndex: 20006,
  memoryMarker: `[[CLOUDFLAREAPITOKEN]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `CloudFlare API Token`,
  tooltip: `A CloudFlare API token with "DNS: Edit" and "Zone: Read" privileges for your domains`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: cloudflareApiTokenValidator
}
