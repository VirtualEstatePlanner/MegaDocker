/** @format */

//  mobName.ts
//  MEGADocker
//  The variable for the Mob name
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { mobnameValidator } from '../../functions/validators/mobnameValidator'

export const mobName: IMemory = {
  memoryIndex: 20026,
  memoryMarker: `[[MOBNAME]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: false,
  name: `Mob Name`,
  tooltip: `The name of your MEGADocker Mob (only using lowercase letters or numbers)`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: mobnameValidator,
}
