/** @format */

import { IMiteType } from '../templateLiteralUnionTypes/IMiteType'

//  IMite.ts
//  MEGADocker
//  an interface that represents a Mite - a building block generic
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

/**
 * interface for IMite
 * @type which type of IMite this IMite is
 * @miteIndex uniquie identifier for this IMite
 * @miteString the IMite's data
 */
export interface IMite {
  type: IMiteType
  miteIndex: number
  miteString: string
}
