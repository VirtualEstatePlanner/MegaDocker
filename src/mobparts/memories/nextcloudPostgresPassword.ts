/** @format */

//  primaryDomain.ts
//  MEGADocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const nextcloudPostgresPassword: IMemory = {
  memoryIndex: 20036,
  memoryMarker: `[[NEXTCLOUDPOSTGRESPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `Nextcloud Postgres Password`,
  tooltip: `The Nextcloud Postgres user's password`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
