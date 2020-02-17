//  mobName.ts
//  MegaDocker
//  The variable for the Mob name
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const mobName: IMemory = {
  memoryIndex: 1000,
  shouldAutocomplete: false,
  name: `Mob Name`,
  tooltip: `Name your MEGADocker Mob.  This will also be the name of the folder that contains your Mob's persistent data inside of your 'Documents/MEGADocker' folder.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
};
