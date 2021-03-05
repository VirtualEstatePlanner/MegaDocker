/** @format */

//  letsEncryptEmail.ts
//  MegaDocker
//  The variable for the usert's Let's Encrypt account email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const gitlabRootEmail: IMemory = {
  memoryIndex: 20011,
  memoryMarker: `[[GITLABROOTEMAIL]]`,
  shouldAutocomplete: true,
  name: `GitLab Root Email`,
  tooltip: `The email address for the root account in GitLab`,
  value: ``,
  valueType: 'email',
  isReady: false,
  validator: emailValidator,
}
