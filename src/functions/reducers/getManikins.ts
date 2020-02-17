import { IManikin } from '../../interfaces/IManikin';

/**
 * updates selectedManikins array based on application state
 */
export const getManikins = (manikinsToSelectFrom: IManikin[]): IManikin[] =>
  manikinsToSelectFrom.filter((eachManikin) => eachManikin.isSelected === true);
