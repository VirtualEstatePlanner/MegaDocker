//  ghostRootMariaDBPassword.ts
//  MegaDocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const gitlabPostgresPassword: IMemory = {
  memoryIndex: 1019,
  memoryMarker: `[[GITLABPOSTGRESPASSWORD]]`,
  shouldAutocomplete: false,
  name: `Gitlab Postgres Password`,
  tooltip: `Choose the password GitLab will use to connect to the postgres database`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};
