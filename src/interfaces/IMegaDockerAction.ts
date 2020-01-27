import { IMegaDockerState } from './IMegaDockerState';

export interface IMegaDockerAction {
  type: string;
  payload: IMegaDockerState;
}
