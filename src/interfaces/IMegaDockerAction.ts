import { IMegaDockerState } from './IMegaDockerState';
import { IManikin } from './IManikin';
import { IMemory } from './IMemory';

export interface IMegaDockerAction {
  type: string;
  payload: any;
}

export interface IMegaDockerActionWithFullStatePayload
  extends IMegaDockerAction {
  type: string;
  payload: IMegaDockerState;
}

export interface IMegaDockerActionWithManikinPayload extends IMegaDockerAction {
  type: string;
  payload: IManikin;
}

export interface IMegaDockerActionWithMemoryPayload extends IMegaDockerAction {
  type: string;
  payload: IMemory;
}
