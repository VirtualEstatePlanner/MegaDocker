/** @format */

//  IMegaDockerAction.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IApplicationStartAction } from '../../interfaces/actionInterfaces/IApplicationStartAction'
import { IOutputDockerSwarmAction } from '../../interfaces/actionInterfaces/IOutputDockerSwarmAction'
import { ISaveMobAction } from '../../interfaces/actionInterfaces/ISaveMobAction'
import { IOpenMobAction } from '../../interfaces/actionInterfaces/IOpenMobAction'
import { IToggleManikinAction } from '../../interfaces/actionInterfaces/IToggleManikinAction'
import { IUpdateMemoryValueAction } from '../../interfaces/actionInterfaces/IUpdateMemoryValueAction'

export type IMegaDockerAction = IApplicationStartAction | IOutputDockerSwarmAction | ISaveMobAction | IOpenMobAction | IToggleManikinAction | IUpdateMemoryValueAction
