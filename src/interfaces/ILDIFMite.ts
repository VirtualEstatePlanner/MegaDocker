/** @format */

//  ILDIFMite.ts
//  MEGADocker
//  an interface that represents a LDIF Mite
//  Created by George Georgulas IV on 3/26/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite'

/**
 * interface for a mite that represents a custom file
 * @path the path to the file in the zip folder
 * @name the name of the file
 * @extension the extension of the file
 * @contents the data inside the file
 * @permissions the unix permissions of the file as a 3-digit string
 */

export interface ILDIFMite extends IMite {
  type: `LDIF`
  miteIndex: number
  miteString: string
}
