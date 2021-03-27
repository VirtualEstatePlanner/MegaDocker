/** @format */

//  ghostRootMariaDBPassword.ts
//  MEGADocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const gitlabPostgresPassword: IMemory = {
  memoryIndex: 20009,
  memoryMarker: `[[GITLABPOSTGRESPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Gitlab Postgres Password`,
  tooltip: `The password for the GitLab Postgres user`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
