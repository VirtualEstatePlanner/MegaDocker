import { IManikin } from '../../interfaces/IManikin';
import {
  IManikinAction,
  //  IManikinArrayAction,
  IMemoryAction,
  //  IMemoryArrayAction,
  IStringAction,
  IMegaDockerAction
} from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
import { IMemory } from '../../interfaces/IMemory';

const isManikinAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IManikinAction => {
  console.log(checkMe);
  return true;
};

/*const isManikinArrayAction: Function = (checkMe: IMegaDockerAction): checkMe is IManikinArrayAction => {
    return true
}*/

const isMemoryAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IMemoryAction => {
  console.log(checkMe);
  return true;
};

/*const isMemoryArrayAction: Function = (checkMe: IMegaDockerAction): checkMe is IMemoryArrayAction => {
    return true
}*/

const isStringAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IStringAction => {
  console.log(checkMe);
  return true;
};

export const megaReducer = (
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
