import { IManikin } from '../../interfaces/IManikin';
import { IMite } from '../../interfaces/IMite';

/**
 * updates allMobMites array based on application state
 */
export const getMites = (manikinsToGetMitesFrom: IManikin[]): IMite[] =>
  manikinsToGetMitesFrom.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite)
  );
