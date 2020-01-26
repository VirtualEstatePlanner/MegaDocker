import { IManikin } from '../../interfaces/IManikin';
import { IMite } from '../../interfaces/IMite';
import {
  IManikinAction,
  IMemoryAction,
  IMiteAction,
  IStringAction,
  IMegaDockerAction
} from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
import { IMemory } from '../../interfaces/IMemory';

const isManikinAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IManikinAction => {
  return true;
};

const isMemoryAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IMemoryAction => {
  return true;
};

const isStringAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IStringAction => {
  return true;
};

const isMiteAction: Function = (
  checkMe: IMegaDockerAction
): checkMe is IMiteAction => {
  return true;
};

/**
 * Reduces previous application state into current application state
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
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
    case `ADD_MANIKIN_MEMORIES`:
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
    case `REMOVE_MANIKIN_MEMORIES`:
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
    case `ADD_MANIKIN_MITES`:
      if (isMiteAction() === true) {
        return {
          ...state,
          allMobMites: [...state.allMobMites, action.payload as IMite]
        };
      }
      break;
    case `REMOVE_MANIKIN_MITES`:
      if (isMiteAction() === true) {
        const index = state.allMobMites.indexOf(action.payload as IMite);
        return {
          ...state,
          allMobMites: [...state.allMobMites.splice(index, 0)]
        };
      }
      break;
    case `UPDATE_INFOPANE_CONTENT`:
      if (isStringAction() === true) {
        const infoValue = action.payload as string;
        return {
          ...state,
          infoContent: infoValue
        };
      }
      break;
    default:
      throw new Error(
        `you probably passed a bad action.type to reducer function`
      );
  }
  return state;
};
