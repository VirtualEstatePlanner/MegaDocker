/** @format */

//  drupalPostgresPassword.ts
//  MEGADocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const drupalPostgresPassword: IMemory = {
  memoryIndex: 20008,
  memoryMarker: `[[DRUPALPOSTGRESPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `Drupal Postgres Password`,
  tooltip: `The password for Drupal to connect to it's PostgreSQL database.`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
