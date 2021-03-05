/** @format */

import { IMite } from '../../interfaces/IMite'

/**
 * updates serviceMites array based on application state
 */
export const getDServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmService`)
