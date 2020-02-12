import { IApplicationStartAction } from '../interfaces/actionInterfaces/IApplicationStartAction';
import { IGenerateYmlOutputAction } from '../interfaces/actionInterfaces/IGenerateYmlOutputAction';
import { IToggleManikinAction } from './actionInterfaces/IToggleManikinAction';
import { IUpdateInfoContentAction } from '../interfaces/actionInterfaces/IUpdateInfoContentAction';
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction';

export type IMegaDockerAction =
  | IApplicationStartAction
  | IGenerateYmlOutputAction
  | IToggleManikinAction
  | IUpdateInfoContentAction
  | IUpdateMemoryValueAction;
