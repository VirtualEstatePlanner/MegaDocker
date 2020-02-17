import { IApplicationStartAction } from '../interfaces/actionInterfaces/IApplicationStartAction';
import { IOutputDockerSwarmAction } from './actionInterfaces/IOutputDockerSwarmAction';
import { IOutputKubernetesPodAction } from './actionInterfaces/IOutputKubernetesPodAction';
import { ISaveMobAction } from './actionInterfaces/ISaveMobAction';
import { IOpenMobAction } from './actionInterfaces/IOpenMobAction';
import { IToggleManikinAction } from './actionInterfaces/IToggleManikinAction';
import { IUpdateInfoContentAction } from '../interfaces/actionInterfaces/IUpdateInfoContentAction';
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction';

export type IMegaDockerAction =
  | IApplicationStartAction
  | IOutputDockerSwarmAction
  | IOutputKubernetesPodAction
  | ISaveMobAction
  | IOpenMobAction
  | IToggleManikinAction
  | IUpdateInfoContentAction
  | IUpdateMemoryValueAction;
