/** @format */

//  cloudflareAPIKey.ts
//  MEGADocker
//  The variable for the Cloudflare API Key
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { cloudflareApiTokenValidator } from '../../functions/validators/cloudflareApiTokenValidator'

export const cloudflareAPIKey: IMemory = {
  memoryIndex: 20005,
  memoryMarker: `[[CLOUDFLAREAPIKEY]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `CloudFlare API Key`,
  tooltip: `A CloudFlare API Key from your account that has full 'domain' privileges.`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: cloudflareApiTokenValidator
}
