/** @format */

//  megaReducer.ts
//  MEGADocker
//  a function that handles React Context state changes for {IMegaDockerAction, IMegaDockerState} React Hooks
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import React from 'react'
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../../interfaces/IMegaDockerState'
import { getManikins } from './getManikins'
import { getMemories } from './getMemories'
import { getMites } from './getMites'
import { getDServiceMites } from './getDServiceMites'
import { getDNetworkMites } from './getDNetworkMites'
import { getCustomMites } from './getCustomMites'
import { zipDockerSwarm } from './zipDockerSwarm'
import { initialMegaDockerState } from '../../components/MegaContext'
import { Theme } from '@material-ui/core'
import { toggleTheme } from './toggleTheme'

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
      return initialMegaDockerState

    case `TOGGLE_THEME`:
      const newTheme: Theme = toggleTheme(newState.theme) as Theme
      newState.theme = newTheme
      return newState

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
