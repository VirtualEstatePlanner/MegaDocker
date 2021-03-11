/** @format */

//  ICustomMite.ts
//  MegaDocker
//  an interface that represents a non-YML Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite'

/**
 * interface for a mite that represents a custom file
 * @path the path to the file in the zip folder
 * @name the name of the file
 * @extension the extension of the file
 * @contents the data inside the file
 * @permissions the unix permissions of the file as a 3-digit string
 */
export interface ICustomMite extends IMite {
  type: `Custom`
  miteString: string
  miteFile: {
    path: string
    name: string
    extension: string
    contents: string
    permissions: string
  }
}
