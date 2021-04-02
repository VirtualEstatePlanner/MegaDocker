/** @format */

import { IMegaDockerState } from '../stateManagement/IMegaDockerState'

export interface IApplicationStartAction {
  type: `APPLICATION_START`
  payload: IMegaDockerState
}
