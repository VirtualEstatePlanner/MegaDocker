/** @format */

//  IMegaDockerAction.ts
//  MEGADocker
//  a union type to represent all possible React Context Reducers
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IApplicationStartAction } from '../actionInterfaces/IApplicationStartAction'
import { IOutputDockerSwarmAction } from '../actionInterfaces/IOutputDockerSwarmAction'
import { IToggleManikinAction } from '../actionInterfaces/IToggleManikinAction'
import { IUpdateMemoryValueAction } from '../actionInterfaces/IUpdateMemoryValueAction'
import { IToggleThemeAction } from '../actionInterfaces/IToggleThemeAction'

export type IMegaDockerAction = IApplicationStartAction | IOutputDockerSwarmAction | IToggleManikinAction | IUpdateMemoryValueAction | IToggleThemeAction
