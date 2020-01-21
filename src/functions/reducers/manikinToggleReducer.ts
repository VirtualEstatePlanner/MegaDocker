import { IMegaDockerState } from '../../classes/IMegaDockerState';
import { IManikinTableActions } from '../../classes/IManikinTableActions';

export const manikinToggleReducer: React.Reducer<
  IMegaDockerState,
  IManikinTableActions
> = (state: IMegaDockerState, action: IManikinTableActions) => {
  const prevState: IMegaDockerState = state;

  switch (action.type) {
    // selected a manikin
    case 'ADD_MANIKIN':
      const manikinAddedState: IMegaDockerState = {
        ...prevState,
        manikinTableContents: action.payload
      };
      return manikinAddedState;
    // deselected a manikin
    case 'REMOVE_MANIKIN':
      const manikinRemovedState: IMegaDockerState = {
        ...prevState,
        manikinTableContents: action.payload
      };
      return manikinRemovedState;
    // default
    default:
      throw new Error('passed a bad action.type to manikinToggleReducer');
  }
};
