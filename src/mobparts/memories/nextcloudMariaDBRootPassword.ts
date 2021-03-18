/** @format */

//  primaryDomain.ts
//  MEGADocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const nextcloudMariaDBRootPassword: IMemory = {
  memoryIndex: 20030,
  memoryMarker: `[[NEXTCLOUDMARIADBROOTPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Nextcloud MariaDB Root Password`,
  tooltip: `Choose a password for nextcloud to connect to it's MariaDB database as root`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
