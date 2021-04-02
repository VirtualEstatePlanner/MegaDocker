/** @format */

//  cloudflareEmail.ts
//  MEGADocker
//  The variable for the user's CloudFlare Email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const cloudflareEmail: IMemory = {
  memoryIndex: 20007,
  memoryMarker: `[[CLOUDFLAREEMAIL]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `CloudFlare Email Address`,
  tooltip: `The email address of your CloudFlare account`,
  value: ``,
  valueType: `email`,
  isReady: false,
  validator: emailValidator,
}
