/** @format */

//  letsEncryptEmail.ts
//  MEGADocker
//  The variable for the usert's Let's Encrypt account email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const gitlabRootEmail: IMemory = {
  memoryIndex: 20013,
  memoryMarker: `[[GITLABROOTEMAIL]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `GitLab Root Email Address`,
  tooltip: `The GitLab root user's email address`,
  memoryValue: ``,
  valueType: `email`,
  isReady: false,
  validator: emailValidator
}
