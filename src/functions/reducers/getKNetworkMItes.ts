/** @format */

import { IMite } from '../../interfaces/IMite'

/**
 * updates networkMites array based on application state
 */
export const getKNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `KubernetesNetwork`)
