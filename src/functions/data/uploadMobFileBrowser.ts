/** @format */

//  uploadMobFileBrowser.ts
//  MEGADocker
//  a function that uploads a .mob file from the local file system into Context using the web FileReader API
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { unpackDotMobFile } from './unpackDotMobFile'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'

/**
 * uploads a JSON file containing a IMegaDockerState to the React application in the browser or in Tauri
 * @param savedFile the file to upload
 * @returns an IMegaDockerState
 */
export const uploadMobFileBrowser: Function = (savedFile: string): IMegaDockerState => unpackDotMobFile(savedFile)
