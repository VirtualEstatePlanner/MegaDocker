/** @format */

//  uploadFileBrowser.ts
//  MEGADocker
//  a function that uploads a file from the local file system to the web application
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { convertStringToMDState } from './convertJSONToMDState'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'

/**
 * uploads a JSON file containing a IMegaDockerState to the React application in the browser or in Tauri
 */
export const uploadFileBrowser: Function = (savedFile: string): void => {
  const uploadedState: IMegaDockerState = convertStringToMDState(savedFile)
  console.log(uploadedState)

  return
}
