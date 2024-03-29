/** @format */

//  letsEncryptEmail.ts
//  MEGADocker
//  The variable for the usert's Let's Encrypt account email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const letsEncryptEmail: IMemory = {
  memoryIndex: 20026,
  memoryMarker: `[[LETSENCRYPTEMAIL]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `Let's Encrypt Email Address`,
  tooltip: `The email address used to register your domain`,
  memoryValue: ``,
  valueType: `email`,
  isReady: false,
  validator: emailValidator
}
