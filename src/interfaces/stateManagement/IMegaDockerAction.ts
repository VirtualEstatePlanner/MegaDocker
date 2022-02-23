/** @format */

//  IMegaDockerAction.ts
//  MEGADocker
//  a union type to represent all possible React Context Reducers
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IApplicationStartAction } from '../actionInterfaces/IApplicationStartAction'
import { IUploadMobActionBrowser } from '../actionInterfaces/IUploadMobActionBrowser'
import { IUploadMobActionTauri } from '../actionInterfaces/IUploadMobActionTauri'
import { IOutputDockerSwarmBrowserAction } from '../actionInterfaces/IOutputDockerSwarmBrowserAction'
import { IOutputDockerSwarmTauriAction } from '../actionInterfaces/IOutputDockerSwarmTauriAction'
import { ISaveMobActionBrowser } from '../actionInterfaces/ISaveMobActionBrowser'
import { ISaveMobActionTauri } from '../actionInterfaces/ISaveMobActionTauri'
import { IToggleManikinAction } from '../actionInterfaces/IToggleManikinAction'
import { IToggleThemeAction } from '../actionInterfaces/IToggleThemeAction'
import { IUpdateMemoryValueAction } from '../actionInterfaces/IUpdateMemoryValueAction'

export type IMegaDockerAction =
  | IApplicationStartAction
  | IUploadMobActionBrowser
  | IUploadMobActionTauri
  | IOutputDockerSwarmBrowserAction
  | IOutputDockerSwarmTauriAction
  | ISaveMobActionBrowser
  | ISaveMobActionTauri
  | IToggleManikinAction
  | IUpdateMemoryValueAction
  | IToggleThemeAction
