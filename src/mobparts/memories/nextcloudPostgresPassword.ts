//  primaryDomain.ts
//  MegaDocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const nextcloudPostgresPassword: IMemory = {
  memoryIndex: 1022,
  memoryMarker: `[[NEXTCLOUDPOSTGRESPASSWORD]]`,
  shouldAutocomplete: false,
  name: `Nextcloud Postgres Password`,
  tooltip: `Choose a password for nextcloud to connect to it's postgres database`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator
};