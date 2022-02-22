/** @format */

//  saveMobBrowser.ts
//  MEGADocker
//  a function that saves a mob file in progress in the browser
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { convertMDStateToJson } from '../utility/convertMDStateToJson'
import fileSaver from 'file-saver'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { mobName } from '../../mobparts/memories/mobName'

/**
 * saves a .mob file in the browser
 */
export const saveMobBrowser: Function = (state: IMegaDockerState) => {
  const blob: Blob = new Blob(convertMDStateToJson(state), { type: `application/json` })
  const mobNameValue: string = state.memories[state.memories.indexOf(mobName)].value
  fileSaver.saveAs(blob, `${mobNameValue}.mob`)
}
