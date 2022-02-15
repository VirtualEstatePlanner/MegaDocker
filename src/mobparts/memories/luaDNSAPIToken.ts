/** @format */

//  luaDNSAPIToken.ts
//  MEGADocker
//  The variable for the user's CloudFlare Email address
//  Created by George Georgulas IV on 10/20/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { noValidator } from '../../functions/validators/noValidator'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
// import { luaDNSAPITokenValidator } from '../../functions/validators/luaDNSAPITokenValidator'

export const luaDNSAPIToken: IMemory = {
  memoryIndex: 20027,
  memoryMarker: `[[LUADNSAPITOKEN]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: `LuaDNS API Token`,
  tooltip: `A LuaDNS API token with whatever the appropriate privileges are for LuaDNS (this field temporarily auto-validates as true with at least one character)`,
  value: ``,
  valueType: `password`,
  isReady: false,
  // validator: luaDNSAPITokenValidator,
  validator: noValidator
}
