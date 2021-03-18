/** @format */

//  n8nPassword.ts
//  MEGADocker
//  The variable for the n8n administrative password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const n8nPassword: IMemory = {
  memoryIndex: 20027,
  memoryMarker: `[[N8NPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `n8n Password`,
  tooltip: `Choose a password for the n8n administrative user`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
