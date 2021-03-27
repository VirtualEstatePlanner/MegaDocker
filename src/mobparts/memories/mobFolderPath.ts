/** @format */

//  mobFolderPath.ts
//  MEGADocker
//  The variable for the location to save the Mob folder
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory'
import { emailValidator } from '../../functions/validators/emailValidator'

export const mobFolderPath: IMemory = {
  memoryIndex: 20025,
  memoryMarker: `[[MOBFOLDERPATH]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  name: `Mob Folder Location`,
  tooltip: `The file path to your Mob's folder.`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: emailValidator,
}
