/** @format */

//  .ts
//  MEGADocker
//  A Manikin to generate a react component styleguidist service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { styleguidistServiceMite } from '../mites/service/styleguidistServiceMite'
import { styleguidistNetworkMite } from '../mites/network/styleguidistNetworkMite'
import styleguidistIcon from '../../images/manikin-icons/styleguidistIcon.png'
import { styleguidistPackageDotJsonMite } from '../mites/custom/styleguidistPackageDotJsonMite'
import { styleguidistStyleguideDotConfigDotJsMite } from '../mites/custom/styleguidistStyleguideDotConfigDotJsMite'
import { styleguidistTsconfigDotJsonMite } from '../mites/custom/styleguidistTsconfigDotJsonMite'
import { styleguidistWebpackDotConfigDotJsMite } from '../mites/custom/styleguidistWebpackDotConfigDotJsMite'
import { styleguidistLdifMite } from '../mites/ldif/styleguidistLdifMite'
/**
 * styleguidist Manikin
 */
export const styleguidistManikin: IManikin = {
  description: `React Component Library`,
  isCore: false,
  isSelected: false,
  folder: `styleguidist`,
  manikinGroups: [`Development`, `Utility`, `Organization`, `Productivity`],
  manikinIcon: styleguidistIcon,
  manikinIndex: 10025,
  memories: [],
  manikinName: `Styleguidist`,
  mites: [
    styleguidistLdifMite,
    styleguidistServiceMite,
    styleguidistNetworkMite,
    styleguidistPackageDotJsonMite,
    styleguidistStyleguideDotConfigDotJsMite,
    styleguidistTsconfigDotJsonMite,
    styleguidistWebpackDotConfigDotJsMite
  ],
  ports: [],
  subfolders: [`assets`, `components`, `configs`, `docs`, `interfaces`, `objects`, `typings`]
}
