/** @format */

//  drupalPostgresPassword.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const drupalPostgresPassword: IMemory = {
  memoryIndex: 20006,
  memoryMarker: `[[DRUPALPOSTGRESPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Drupal Postgres Password`,
  tooltip: `The password for Drupal to connect to it's PostgreSQL database.`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
