/** @format */

import { IMite } from '../../interfaces/IMite'

/**
 * updates networkMites array based on application state
 */
export const getDNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmNetwork`)
