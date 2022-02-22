/** @format */

//  IApplicationStartAction.ts
//  MEGADocker
//  interface for a React Context dispatch to start the application with default data
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMegaDockerState } from '../stateManagement/IMegaDockerState'
export interface IApplicationStartAction {
  type: `APPLICATION_START`
  payload: IMegaDockerState
}
