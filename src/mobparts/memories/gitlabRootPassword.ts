/** @format */

//  ghostRootMariaDBPassword.ts
//  MEGADocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const gitlabRootPassword: IMemory = {
  memoryIndex: 20012,
  memoryMarker: `[[GITLABROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Gitlab Root Password`,
  tooltip: `Choose the password for the root GitLab user`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
