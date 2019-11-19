import { allManikins } from './allManikins';

/**
 * an array containing all MEGADocker's Core Manikins
 */
export const coreManikins = allManikins.filter(
  (eachManikin) => eachManikin.isCore === false
);
