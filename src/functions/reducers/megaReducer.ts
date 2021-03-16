/** @format */

//  megaReducer.ts
//  MegaDocker
//  a function that handles React Context state changes for {IMegaDockerAction, IMegaDockerState} React Hooks
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import React from 'react'
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../../interfaces/IMegaDockerState'
import { workingManikins } from '../../globals/workingManikins'
import { getManikins } from './getManikins'
import { getMemories } from './getMemories'
import { getMites } from './getMites'
import { getDServiceMites } from './getDServiceMites'
import { getDNetworkMites } from './getDNetworkMites'
import { getCustomMites } from './getCustomMites'
import { zipDockerSwarm } from './zipDockerSwarm'

/**
 * Updates application state
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (state: IMegaDockerState, action: IMegaDockerAction): IMegaDockerState => {
  /**
   * a mutable copy of the state to make changes to
   */
  let newState: IMegaDockerState = { ...state }

  switch (
    action.type // check which modification to make to state
  ) {
    case `APPLICATION_START`: // to start the program with only core manikins selected
      const appStartState: IMegaDockerState = {
        manikinTable: workingManikins,
        selectedManikins: getManikins(workingManikins),
        memories: getMemories(newState.selectedManikins),
        allMobMites: getMites(newState.selectedManikins),
        mobDServiceMites: getDServiceMites(newState.allMobMites),
        mobDNetworkMites: getDNetworkMites(newState.allMobMites),
        mobCustomMites: getCustomMites(newState.allMobMites),
        ymlOutput: `appStartState`,
      }
      return appStartState

    case `TOGGLE_MANIKIN`: // to select or deselect a manikin
      newState.manikinTable[action.payload].isSelected = !state.manikinTable[action.payload].isSelected // reverses the selected boolean in the manikin passed to it
      newState.selectedManikins = getManikins(newState.manikinTable) // rebuilds selected Manikins array
      newState.memories = getMemories(newState.selectedManikins) // rebuilds Memories array
      newState.allMobMites = getMites(newState.selectedManikins) // rebuilds Mites array
      newState.mobDServiceMites = getDServiceMites(newState.allMobMites) // rebuilds Docker Swarm network Mites array
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites) // rebuilds Docker Swarm service Mites array
      newState.mobCustomMites = getCustomMites(newState.allMobMites) // custom mite file-based Mite[]
      return newState

    case `UPDATE_MEMORY_VALUE`: // to handle changing data in a memory's value
      const memoryIndex = newState.memories.indexOf(action.payload.memory)
      newState.memories[memoryIndex].value = action.payload.value
      newState.memories[memoryIndex].isReady = newState.memories[memoryIndex].validator(newState.memories[memoryIndex].value)
      return newState

    //  case `OPEN_MOB_FILE`: // TODO: for open button
    //    return state

    //  case `SAVE_MOB_FILE`: // TODO: for save button
    //    return state

    case `DOCKER_SWARM_OUTPUT`: // handles creation and download of Docker Swarm zip file
      zipDockerSwarm({
        manikins: state.selectedManikins,
        memories: state.memories,
      })
      return state

    default:
      throw new Error(`megaReducer Error: hit default case in action.type switch`) // to prevent non-standard actions being passed
  }
}
