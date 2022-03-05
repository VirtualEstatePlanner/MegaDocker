/** @format */

//  sortMiteStrings.ts
//  MEGADocker
//  prepares docker service miteStrings for yml output
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/objectInterfaces/IMite'
import { getDServiceMites } from '../reducers/getDServiceMites'
import { sortMiteStrings } from './sortMiteStrings'

  /**
   * @param mites the array of mites to be filtered for ITraefikedServiceMites and sorted
   * @returns a string of the filtered and sorted mites ready to be added to the ymlOutput
   */
   export const sortServiceMiteStrings: Function = (mites: IMite[]): string => sortMiteStrings(getDServiceMites(mites))
