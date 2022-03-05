/** @format */

//  sortMiteStrings.ts
//  MEGADocker
//  prepares miteStrings for yml output
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMite } from '../../interfaces/objectInterfaces/IMite'

/**
 * @param mites the array of mites to be filtered for miteStrings and sorted
 * @returns a string of the filtered and sorted mites ready to be added to the ymlOutput
 */
export const sortMiteStrings: Function = (mites: IMite[]): string =>
  mites
    .sort((mite1, mite2): number => {
      if (mite1.miteIndex > mite2.miteIndex) {
        return 1
      }
      if (mite1.miteIndex < mite2.miteIndex) {
        return -1
      }
      return 0
    })
    .map((eachMite: IMite) => eachMite.miteString)
    .join(``)
