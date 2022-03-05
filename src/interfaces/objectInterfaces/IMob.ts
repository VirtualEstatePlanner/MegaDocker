/** @format */

//  IMob.ts
//  MEGADocker
//  an interface that represents a MEGADocker .mob file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IThemeString } from '../templateLiteralUnionTypes/IThemeString'
import { IMiniManikin } from './IMiniManikin'

export interface IMob {
  mobManikins: IMiniManikin[]
  mobName: string
  mobVersion: string
  theme: IThemeString
}
