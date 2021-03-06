/** @format */

//  letsEncryptEmail.ts
//  MEGADocker
//  The variable for the usert's Let's Encrypt account email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const letsEncryptEmail: IMemory = {
  memoryIndex: 20026,
  memoryMarker: `[[LETSENCRYPTEMAIL]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Let's Encrypt Email Address`,
  tooltip: `The email address used to register your domain`,
  value: ``,
  valueType: `email`,
  isReady: false,
  validator: emailValidator,
}
