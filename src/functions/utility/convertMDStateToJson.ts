/** @format */

//  convertMDStateToJson.ts
//  MEGADocker
//  a function that converts an IMegaDockerState to a JSON object
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { IMob } from '../../interfaces/objectInterfaces/IMob'
import { mobName } from '../../mobparts/memories/mobName'
/**
 * creates a minimal version of the IMegaDockerState
 */
export const convertMDStateToJson: Function = (state: IMegaDockerState): JSON => {
  const mobToSave: IMob = {
    mobManikins: state.selectedManikins,
    mobMemories: state.memories,
    mobName: `${state.memories[state.memories.indexOf(mobName)].value}`
  }

  // convert the IMegaDockerState to a JSON object
  const JSONString: string = JSON.stringify(mobToSave)
  const JSONObject: JSON = JSON.parse(JSONString)
  return JSONObject
}
