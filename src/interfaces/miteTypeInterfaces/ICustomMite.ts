/** @format */

//  ICustomMite.ts
//  MEGADocker
//  an interface that represents a custom Mite - one that isn't part of our core stack definition
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IFileExtension } from '../templateLiteralUnionTypes/IFileExtension'
import { IMite } from '../objectInterfaces/IMite'

/**
 * interface for a mite that represents a custom file
 * @param path the path to the file in the zip folder
 * @param name the name of the file
 * @param extension the extension of the file
 * @param contents the data inside the file
 * @param permissions the unix permissions of the file as a 3-digit string
 */

export interface ICustomMite extends IMite {
  type: `Custom`
  miteString: string
  miteFile: {
    path: string
    name: string
    extension: IFileExtension
    contents: string
    permissions: string
  }
}
