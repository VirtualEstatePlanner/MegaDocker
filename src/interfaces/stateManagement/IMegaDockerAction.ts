/** @format */

//  IMegaDockerAction.ts
//  MEGADocker
//  a union type to represent all possible React Context Reducers
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IApplicationStartAction } from '../actionInterfaces/IApplicationStartAction'
import { IUploadMobActionBrowser } from '../actionInterfaces/IUploadMobActionBrowser'
import { IUploadMobActionTauri } from '../actionInterfaces/IUploadMobActionTauri'
import { IOutputDockerSwarmBrowser } from '../actionInterfaces/IOutputDockerSwarmBrowser'
import { IOutputDockerSwarmTauri } from '../actionInterfaces/IOutputDockerSwarmTauri'
import { ISaveMobActionBrowser } from '../actionInterfaces/ISaveMobActionBrowser'
import { ISaveMobActionTauri } from '../actionInterfaces/ISaveMobActionTauri'
import { IToggleManikinAction } from '../actionInterfaces/IToggleManikinAction'
import { IToggleThemeAction } from '../actionInterfaces/IToggleThemeAction'
import { IUpdateMemoryValueAction } from '../actionInterfaces/IUpdateMemoryValueAction'

export type IMegaDockerAction =
  // appearance actions
  | IToggleThemeAction
  // core actions
  | IApplicationStartAction
  | IToggleManikinAction
  | IUpdateMemoryValueAction
  // browser actions
  | IUploadMobActionBrowser
  | IOutputDockerSwarmBrowser
  | ISaveMobActionBrowser
  // tauri actions
  | IUploadMobActionTauri
  | IOutputDockerSwarmTauri
  | ISaveMobActionTauri
