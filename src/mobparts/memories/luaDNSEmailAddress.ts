/** @format */

//  luaDNSEmailAddress.ts
//  MEGADocker
//  The variable for the LuaDNS username
//  Created by George Georgulas IV on 10/20/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const luaDNSEmailAddress: IMemory = {
  memoryIndex: 20028,
  memoryMarker: `[[LUADNSEMAILADDRESS]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: false,
  memoryName: `LuaDNS Email Address`,
  tooltip: `Your LuaDNS Email address`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  validator: emailValidator
}
