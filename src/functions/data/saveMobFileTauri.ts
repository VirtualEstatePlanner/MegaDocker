/** @format */

//  saveMobFileTauri.ts
//  MEGADocker
//  a function that saves a mob file in progress using the Tauri writeBinaryFile API
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { packDotMobFile } from './packDotMobFile'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { mobName } from '../../mobparts/memories/mobName'
import { writeBinaryFile } from '@tauri-apps/api/fs'

/**
 * saves a .mob file in Tauri
 * @param state the current application state
 * @returns a Promise that resolves when the file is saved
 */
export const saveMobFileTauri: Function = async (state: IMegaDockerState): Promise<void> => {
  const mobNameValue: string = state.memories[state.memories.indexOf(mobName)].memoryValue
  const blob: Blob = new Blob(packDotMobFile(state), { type: `application/json` })
  const mobContents: Uint8Array = new Uint8Array(await blob.arrayBuffer())
  if (mobNameValue && mobNameValue !== ``) {
    // save the blob with the chosen name
    await writeBinaryFile({ contents: mobContents, path: `${mobNameValue}.mob` }, { dir: 8 /* Downloads directory */ })
  } else {
    // save the blob as an untitled .mob
    await writeBinaryFile({ contents: mobContents, path: `Untitled.mob` }, { dir: 8 /* Downloads directory */ })
  }
}
