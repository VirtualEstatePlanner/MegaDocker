/** @format */

//  n8nPassword.ts
//  MEGADocker
//  The variable for the n8n administrative password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const n8nPassword: IMemory = {
  memoryIndex: 20031,
  memoryMarker: `[[N8NPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `n8n Password`,
  tooltip: `The password for the n8n admin user`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
