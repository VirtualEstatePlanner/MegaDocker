/** @format */

//  sortNetworkMiteStrings.ts
//  MEGADocker
//  prepares docker swarm network miteStrings for yml output
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/objectInterfaces/IMite'
import { getDNetworkMites } from '../reducers/getDNetworkMites'
import { sortMiteStrings } from './sortMiteStrings'

/**
 * @param mites the array of mites to be filtered for INetworkMites and sorted
 * @returns a string of the filtered and sorted mites ready to be added to the ymlOutput
 */
export const sortNetworkMiteStrings: Function = (mites: IMite[]): string => sortMiteStrings(getDNetworkMites(mites))
