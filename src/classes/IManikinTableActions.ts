import React from 'react';
import { IMegaDockerState } from './IMegaDockerState';
import { IManikin } from './IManikin';

export interface IManikinTableActions {
  type: `ADD_MANIKIN` | `REMOVE_MANIKIN`;
  payload: IManikin[];
}

export const manikinTableActions = (
  state: IMegaDockerState,
  dispatch: React.Dispatch<IManikinTableActions>,
  manikin: IManikin
): void => {
  const manikinIsSelected = state.manikinTableContents.includes(manikin);

  var dispatchObject: IManikinTableActions = {
    type: `ADD_MANIKIN`,
    payload: [...state.manikinTableContents, manikin]
  };
  if (manikinIsSelected) {
    const mobMinusManikin: IManikin[] = state.manikinTableContents.filter(
      (eachManikin: IManikin = manikin) => manikin.name !== eachManikin.name
    );
    dispatchObject = {
      type: `REMOVE_MANIKIN`,
      payload: mobMinusManikin
    };
  }
  return dispatch(dispatchObject);
};
