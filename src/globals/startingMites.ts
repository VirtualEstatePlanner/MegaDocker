import { allManikins } from './allManikins';
import { IMite } from '../interfaces/IMite';

/**
 * an array containing all MEGADocker's starting Mites
 */
export const startingMites: IMite[] = allManikins.flatMap((eachManikin) =>
  eachManikin.mites.flatMap((eachMite) => eachMite)
);

/**
 * an array containing all MEGADocker's starting Service Mites
 */
export const startingServiceMites: IMite[] = startingMites.filter(
  (eachMite) => eachMite.type === `Service`
);

/**
 * an array containing all MEGADocker's starting Network Mites
 */
export const startingNetworkMites: IMite[] = startingMites.filter(
  (eachMite) => eachMite.type === `Network`
);

/**
 * an array containing all MEGADocker's starting Network Mites
 */
export const startingCustomMites: IMite[] = startingMites.filter(
  (eachMite) => eachMite.type === `Custom`
);
