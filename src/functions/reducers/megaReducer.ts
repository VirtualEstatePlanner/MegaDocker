//import { IManikin } from '../../interfaces/IManikin';
//import { IMemory } from '../../interfaces/IMemory';
//import { IMite } from '../../interfaces/IMite';
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';

/**
 * Updates application state with useReducer
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
  prevState: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  let newState: IMegaDockerState = prevState;
  switch (action.type) {
    case `TOGGLE_MANIKIN`:
      newState = {
        ...prevState,
        manikinTableContents: [...action.payload.manikinTableContents]
      };
      break;
    case `UPDATE_MEMORY_VALUE`:
      newState = {
        ...prevState,
        memoryTableContents: [...action.payload.memoryTableContents]
      };
      break;
    default:
      throw new Error(`something went wrong in the megaReducer function`);
  }
  return newState;
};
