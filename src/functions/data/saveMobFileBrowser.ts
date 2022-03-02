/** @format */

//  saveMobFileBrowser.ts
//  MEGADocker
//  a function that saves a mob file in progress using the filesaver.js library
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { packDotMobFile } from './packDotMobFile'
import fileSaver from 'file-saver'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { mobName } from '../../mobparts/memories/mobName'
import { IMob } from '../../interfaces/objectInterfaces/IMob'

/**
 * saves a .mob file in the browser
 * @state the current application state
 */
export const saveMobFileBrowser: Function = (state: IMegaDockerState): void => {
  const mobNameValue: string = state.memories[state.memories.indexOf(mobName)].memoryValue
  const JSONState: IMob = packDotMobFile(state)
  const blob: Blob = new Blob([JSON.stringify(JSONState)], { type: `application/json` })
  if (mobNameValue) {
    // save the blob with the chosen name
    fileSaver.saveAs(blob, `${mobNameValue}.mob`)
  } else {
    // save the blob as an untitled .mob
    fileSaver.saveAs(blob, `Untitled.mob`)
  }
}
