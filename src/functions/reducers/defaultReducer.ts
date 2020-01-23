import { IManikin } from '../../classes/IManikin';
import {
  IManikinAction,
  //  IManikinArrayAction,
  IMemoryAction,
  //  IMemoryArrayAction,
  IStringAction,
  IMegaDockerAction
} from '../../classes/IMegaDockerAction';
import { IMegaDockerState } from '../../classes/IMegaDockerState';
import { IMemory } from '../../classes/IMemory';

const isManikinAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IManikinAction => {
  return true;
};

/*const isManikinArrayAction: Function = (checkMe: IMegaDockerAction): checkMe is IManikinArrayAction => {
    return true
}*/

const isMemoryAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IMemoryAction => {
  return true;
};

/*const isMemoryArrayAction: Function = (checkMe: IMegaDockerAction): checkMe is IMemoryArrayAction => {
    return true
}*/

const isStringAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IStringAction => {
  return true;
};

export const defaultReducer = (
  state: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  switch (action.type) {
    case `ADD_MANIKIN`:
      if (isManikinAction() === true) {
        return {
          ...state,
          manikinTableContents: [
            ...state.manikinTableContents,
            action.payload as IManikin
          ]
        };
      }
      break;
    case `REMOVE_MANIKIN`:
      if (isManikinAction() === true) {
        const index = state.manikinTableContents.indexOf(
          action.payload as IManikin
        );
        return {
          ...state,
          manikinTableContents: [...state.manikinTableContents.splice(index, 0)]
        };
      }
      break;
    case `ADD_MEMORY`:
      if (isMemoryAction() === true) {
        return {
          ...state,
          memoryTableContents: [
            ...state.memoryTableContents,
            action.payload as IMemory
          ]
        };
      }
      break;
    case `REMOVE_MEMORY`:
      if (isMemoryAction() === true) {
        const index = state.memoryTableContents.indexOf(
          action.payload as IMemory
        );
        return {
          ...state,
          memoryTableContents: [...state.memoryTableContents.splice(index, 0)]
        };
      }
      break;
    case `UPDATE_INFOPANE`:
      if (isStringAction() === true) {
        const infoValue = action.payload as string;
        return {
          ...state,
          infoContent: infoValue
        };
      }
      break;
    default:
      throw new Error(`passed a bad Manikin action to reducer function`);
  }
  return state;
};
