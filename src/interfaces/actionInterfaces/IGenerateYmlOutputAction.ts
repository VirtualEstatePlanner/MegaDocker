import { IManikin } from '../IManikin';
import { IMegaDockerAction } from '../IMegaDockerAction';

export interface IGenerateYmlOutputAction extends IMegaDockerAction {
  type: `GENERATE_YML_OUTPUT`;
  manikins: IManikin[];
}
