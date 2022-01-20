/** @format */

//  ghostRootMariaDBPassword.ts
//  MEGADocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const gitlabRootPassword: IMemory = {
  memoryIndex: 20014,
  memoryMarker: `[[GITLABROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Gitlab Root Password`,
  tooltip: `The GitLab root user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
