//  mobName.ts
//  MegaDocker
//  The variable for the Mob name
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { nowhitespaceValidator } from '../../functions/validators/nowhitespaceValidator';

export let mobName: IMemory = {
  memoryIndex: 8,
  shouldAutocomplete: false,
  name: `Mob Name`,
  tooltip: `Name your MEGADocker Mob.  This will also be the name of the folder that contains your Mob's persistent data inside of your 'Documents/MEGADocker' folder.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: nowhitespaceValidator
};
