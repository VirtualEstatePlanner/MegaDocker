import { IMite } from '../../interfaces/IMite';

/**
 * updates customMites array based on application state
 */
export const getCustomMites = (miteArray: IMite[]): IMite[][] => [
  miteArray.filter((eachMite) => eachMite.type === `Custom`),
];
