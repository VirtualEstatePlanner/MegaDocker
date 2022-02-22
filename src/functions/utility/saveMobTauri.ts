/** @format */

//  saveMobTauri.ts
//  MEGADocker
//  a function that saves a mob file in progress in Tauri
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { convertMDStateToJson } from '../utility/convertMDStateToJson'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { mobName } from '../../mobparts/memories/mobName'
import { writeBinaryFile } from '@tauri-apps/api/fs'

/**
 * saves a .mob file in Tauri
 * TODO: make this actually work
 */
export const saveMobTauri: Function = async (state: IMegaDockerState): Promise<void> => {
  const mobNameValue: string = state.memories[state.memories.indexOf(mobName)].value
  const blob: Blob = new Blob(convertMDStateToJson(state), { type: `application/json` })
  const mobContents: Uint8Array = new Uint8Array(await blob.arrayBuffer())
  await writeBinaryFile({ contents: mobContents, path: `${mobNameValue}.mob` }, { dir: 8 /* Downloads directory */ })
}
  