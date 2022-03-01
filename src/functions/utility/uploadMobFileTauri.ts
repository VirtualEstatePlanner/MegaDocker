/** @format */

//  uploadMobFileTauri.ts
//  MEGADocker
//  a function that uploads a .mob file from the local file system into Context using the tauri API
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { loadDotMobFile } from './loadDotMobFile'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'

/**
 * uploads a JSON file containing a IMegaDockerState to the React application in the browser or in Tauri
 */
export const uploadMobFileTauri: Function = (savedFile: string): IMegaDockerState => loadDotMobFile(savedFile)
