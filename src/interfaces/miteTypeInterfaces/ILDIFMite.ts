/** @format */

//  ILDIFMite.ts
//  MEGADocker
//  an interface that represents a LDIF Mite
//  Created by George Georgulas IV on 3/26/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMite } from '../objectInterfaces/IMite'

/**
 * interface for a mite that represents a .ldif file
 */

export interface ILDIFMite extends IMite {
  type: `LDIF`
  miteIndex: number
  miteString: string
}
