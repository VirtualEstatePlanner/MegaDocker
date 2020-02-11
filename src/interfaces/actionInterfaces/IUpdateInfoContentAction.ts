import { IMegaDockerAction } from '../IMegaDockerAction';

export interface IUpdateInfoContentAction extends IMegaDockerAction {
  type: `UPDATE_INFO_CONTENT`;
  payload: string;
}
