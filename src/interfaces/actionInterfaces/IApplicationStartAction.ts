import { IMegaDockerState } from '../IMegaDockerState';

export interface IApplicationStartAction {
  type: `APPLICATION_START`;
  payload: IMegaDockerState;
}
