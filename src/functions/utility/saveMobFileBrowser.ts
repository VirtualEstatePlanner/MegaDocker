/** @format */

//  saveMobFileBrowser.ts
//  MEGADocker
//  a function that saves a mob file in progress using the filesaver.js library
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { convertMDStateToJson } from './convertMDStateToJson'
import fileSaver from 'file-saver'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { mobName } from '../../mobparts/memories/mobName'

/**
 * saves a .mob file in the browser
 */
export const saveMobFileBrowser: Function = (state: IMegaDockerState): void => {
  // convert state to json
  const JSONState: JSON = convertMDStateToJson(state)
  // convert json to a string
  const JSONString: string = JSON.stringify(JSONState)
  // convert json to blob
  const blob: Blob = new Blob([JSONString], { type: `application/json` })
  const mobNameValue: string = state.memories[state.memories.indexOf(mobName)].value
  // check for existence of mobNameValue
  if (mobNameValue) {
    // save the blob with the chosen name
    fileSaver.saveAs(blob, `${mobNameValue}.mob`)
  } else {
    // save the blob with an untitled name
    fileSaver.saveAs(blob, `Untitled.mob`)
  }
}
