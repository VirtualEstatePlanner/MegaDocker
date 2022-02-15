/** @format */

//  IMegaDockerAction.ts
//  MEGADocker
//  a union type to represent all possible React Context Reducers
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IApplicationStartAction } from '../actionInterfaces/IApplicationStartAction'
import { IOutputDockerSwarmBrowserAction } from '../actionInterfaces/IOutputDockerSwarmBrowserAction'
import { IOutputDockerSwarmTauriAction } from '../actionInterfaces/IOutputDockerSwarmTauriAction'
import { IToggleManikinAction } from '../actionInterfaces/IToggleManikinAction'
import { IUpdateMemoryValueAction } from '../actionInterfaces/IUpdateMemoryValueAction'
import { IToggleThemeAction } from '../actionInterfaces/IToggleThemeAction'

export type IMegaDockerAction = IApplicationStartAction | IOutputDockerSwarmBrowserAction | IOutputDockerSwarmTauriAction | IToggleManikinAction | IUpdateMemoryValueAction | IToggleThemeAction
