/** @format */

//  megaReducer.ts
//  MEGADocker
//  a reducer function that processes React Context state changes for {IMegaDockerAction, IMegaDockerState} React Hooks
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

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
import { saveMobFileBrowser } from '../data/saveMobFileBrowser'
import { saveMobFileTauri } from '../data/saveMobFileTauri'
import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'

/**
 * Updates application state
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (state: IMegaDockerState, action: IMegaDockerAction): IMegaDockerState => {
  // creates a mutable copy of the state to make changes to
  let newState: IMegaDockerState = { ...state }

  switch (
    action.type // check which modification to make to state
  ) {
    // starts the program with only core manikins selected
    case `APPLICATION_START`:
      return initialMegaDockerState

    // creates and saves Docker Swarm zip file in browser
    case `DOCKER_SWARM_OUTPUT_BROWSER`:
      zipDockerSwarmBrowser({
        manikins: state.selectedManikins,
        memories: state.memories
      })
      return state

    // creates and saves Docker Swarm zip file in Tauri desktop application
    case `DOCKER_SWARM_OUTPUT_TAURI`:
      zipDockerSwarmTauri({
        manikins: state.selectedManikins,
        memories: state.memories
      })
      return state

    // saves a mob file in the browser
    case `UPLOAD_MOB_FILE_BROWSER`:
      newState = action.payload
      newState.MEGADockerVersion = currentMegaDockerVersion
      newState.loadedFile = null
      return newState

    // saves a mob file in Tauri desktop application
    case `UPLOAD_MOB_FILE_TAURI`:
      newState = action.payload
      newState.MEGADockerVersion = currentMegaDockerVersion
      newState.loadedFile = null
      // TODO: Implement
      return newState

    // saves a mob file in the browser
    case `SAVE_MOB_FILE_BROWSER`:
      saveMobFileBrowser(state)
      return state

    // saves a mob file in Tauri desktop application
    case `SAVE_MOB_FILE_TAURI`:
      saveMobFileTauri(state)
      return state

    // selects or deselects a manikin
    case `TOGGLE_MANIKIN`:
      newState.manikinTable[action.payload].isSelected = !state.manikinTable[action.payload].isSelected // reverses the selected boolean in the manikin passed to it
      newState.selectedManikins = getManikins(newState.manikinTable) // rebuilds selected Manikins array
      newState.memories = getMemories(newState.selectedManikins) // rebuilds Memories array
      newState.allMobMites = getMites(newState.selectedManikins) // rebuilds Mites array
      newState.mobDServiceMites = getDServiceMites(newState.allMobMites) // rebuilds Docker Swarm network Mites array
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites) // rebuilds Docker Swarm service Mites array
      newState.mobCustomMites = getCustomMites(newState.allMobMites) // rebuilds custom mite file-based Mites array
      return newState

    // toggles light and dark mode
    case `TOGGLE_THEME`:
      const newTheme: Theme = toggleTheme(newState.theme) as Theme
      newState.theme = newTheme
      return newState

    // changes a memory's value
    case `UPDATE_MEMORY_VALUE`:
      const memoryIndex = newState.memories.indexOf(action.payload.memory)
      newState.memories[memoryIndex].memoryValue = action.payload.value
      newState.memories[memoryIndex].isReady = newState.memories[memoryIndex].validator(newState.memories[memoryIndex].memoryValue)
      return newState

    // prevents non-standard actions being passed to the reducer
    default:
      throw new Error(`megaReducer Error: hit default case in action.type switch`)
  }
}
