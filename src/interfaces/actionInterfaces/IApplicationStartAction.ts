import { IMegaDockerAction } from '../IMegaDockerAction';

export interface IApplicationStartAction extends IMegaDockerAction {
  type: `APPLICATION_START`;
  payload: {};
}
