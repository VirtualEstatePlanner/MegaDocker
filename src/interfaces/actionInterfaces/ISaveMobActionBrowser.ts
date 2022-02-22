/** @format */

//  ISaveMobActionBrowser.ts
//  MEGADocker
//  interface for a React Context dispatch to save the mob file in progress in the browser
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMegaDockerState } from '../stateManagement/IMegaDockerState'
export interface ISaveMobActionBrowser {
  type: `SAVE_MOB_FILE_BROWSER`
  payload: IMegaDockerState
}
