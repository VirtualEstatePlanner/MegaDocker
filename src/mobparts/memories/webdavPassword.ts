/** @format */

//  wordpressMariaDBPassword.ts
//  MEGADocker
//  The variable for Wordpress's MariaDB User's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const webdavPassword: IMemory = {
  memoryIndex: 20043,
  memoryMarker: `[[WEBDAVPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `WebDAV Password`,
  tooltip: `The WebDAV user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
