/** @format */

//  IMegaDockerAction.ts
//  MegaDocker
//  a union type to represent all possible React Context Reducers
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IApplicationStartAction } from '../interfaces/actionInterfaces/IApplicationStartAction'
import { IOutputDockerSwarmAction } from './actionInterfaces/IOutputDockerSwarmAction'
import { IToggleManikinAction } from './actionInterfaces/IToggleManikinAction'
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction'

export type IMegaDockerAction = IApplicationStartAction | IOutputDockerSwarmAction | IToggleManikinAction | IUpdateMemoryValueAction
