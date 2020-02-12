import { IMegaDockerState } from '../IMegaDockerState';

export interface IGenerateYmlOutputAction {
  type: `GENERATE_YML_OUTPUT`;
  payload: IMegaDockerState;
}
