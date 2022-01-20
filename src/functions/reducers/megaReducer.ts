/** @format */

//  megaReducer.ts
//  MEGADocker
//  a function that handles React Context state changes for {IMegaDockerAction, IMegaDockerState} React Hooks
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Theme } from '@mui/material'
import { getManikins } from './getManikins'
import { getMemories } from './getMemories'
import { getMites } from './getMites'
import { getDServiceMites } from './getDServiceMites'
import { getDNetworkMites } from './getDNetworkMites'
import { getCustomMites } from './getCustomMites'
import { toggleTheme } from './toggleTheme'
import { zipDockerSwarmBrowser } from './zipDockerSwarmBrowser'
import { zipDockerSwarmTauri } from './zipDockerSwarmTauri'
import { initialMegaDockerState } from '../../globals/initialMegaDockerState'
import { IMegaDockerAction } from '../../interfaces/stateManagement/IMegaDockerAction'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'

/**
 * Updates application state
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (state: IMegaDockerState, action: IMegaDockerAction): IMegaDockerState => {
  /**
   * creates a mutable copy of the state to make changes to
   */
  let newState: IMegaDockerState = { ...state }

  switch (
    action.type // check which modification to make to state
  ) {
    case `APPLICATION_START`: // to start the program with only core manikins selected
      return initialMegaDockerState

    case `TOGGLE_THEME`: // toggles light and dark mode
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
      newState.mobCustomMites = getCustomMites(newState.allMobMites) // rebuilds custom mite file-based Mites array
      return newState

    case `UPDATE_MEMORY_VALUE`: // to handle changing data in a memory's value
      const memoryIndex = newState.memories.indexOf(action.payload.memory)
      newState.memories[memoryIndex].value = action.payload.value
      newState.memories[memoryIndex].isReady = newState.memories[memoryIndex].validator(newState.memories[memoryIndex].value)
      return newState

    case `DOCKER_SWARM_OUTPUT_BROWSER`: // handles creation and download of Docker Swarm zip file in browser
      zipDockerSwarmBrowser({
        manikins: state.selectedManikins,
        memories: state.memories
      })
      return state

    case `DOCKER_SWARM_OUTPUT_TAURI`: // handles creation and download of Docker Swarm zip file in tauri desktop application
      zipDockerSwarmTauri({
        manikins: state.selectedManikins,
        memories: state.memories
      })
      return state

    default:
      throw new Error(`megaReducer Error: hit default case in action.type switch`) // to prevent non-standard actions being passed
  }
}
