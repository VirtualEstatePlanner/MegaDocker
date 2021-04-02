/** @format */

//  swarmpitCouchbasePassword.ts
//  MEGADocker
//  The variable for the admin password of swampit's CouchDB
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const swarmpitCouchbasePassword: IMemory = {
  memoryIndex: 20043,
  memoryMarker: `[[SWARMPITCOUCHBASEPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `Swarmpit Couchbase Password`,
  tooltip: `The Swarmpit Couchbase user's password`,
  value: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator,
}
