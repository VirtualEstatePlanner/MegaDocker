import { IMegaDockerAction } from '../IMegaDockerAction';
import { IMegaDockerState } from '../IMegaDockerState';

export interface IApplicationStartAction extends IMegaDockerAction {
  type: `APPLICATION_START`;
  payload: IMegaDockerState;
}
