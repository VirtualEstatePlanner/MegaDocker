/** @format */

//  swarmpitCouchbasePassword.ts
//  MegaDocker
//  The variable for the admin password of swampit's CouchDB
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const swarmpitCouchbasePassword: IMemory = {
  memoryIndex: 20041,
  memoryMarker: `[[SWARMPITCOUCHBASEPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Swarmpit Couchbase Password`,
  tooltip: `Choose a password for Swarmpit to connect to it's main database`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
}
