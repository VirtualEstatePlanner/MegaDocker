/** @format */

//  primaryDomain.ts
//  MEGADocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const nextcloudMariaDBPassword: IMemory = {
  memoryIndex: 20029,
  memoryMarker: `[[NEXTCLOUDMARIADBPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Nextcloud MariaDB Password`,
  tooltip: `The Nextcloud MariaDB password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
