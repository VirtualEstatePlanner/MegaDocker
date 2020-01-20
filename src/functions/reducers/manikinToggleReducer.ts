import { IMegaDockerState } from '../../classes/IMegaDockerState';
import { IManikinToggleAction } from '../../classes/IReducerActions';

export const manikinToggleReducer: React.Reducer<
  IMegaDockerState,
  IManikinToggleAction
> = (state: IMegaDockerState, action: IManikinToggleAction) => {
  const prevState: IMegaDockerState = state;

  switch (action.type) {
    // selected a manikin
    case 'ADD_MANIKIN':
      const newState: IMegaDockerState = prevState;
      return newState;
    // deselected a manikin
    case 'REMOVE_MANIKIN':
      return state;
    // default
    default:
      throw new Error('passed a bad action.type to manikinToggleReducer');
  }
};
