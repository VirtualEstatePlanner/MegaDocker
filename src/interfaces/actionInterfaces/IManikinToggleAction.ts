import { IManikin } from '../IManikin';
import { IMegaDockerAction } from '../IMegaDockerAction';

export interface IManikinToggleAction extends IMegaDockerAction {
  type: `MANIKIN_TOGGLE_ACTION`;
  payload: IManikin;
}
