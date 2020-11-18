//  .ts
//  MegaDocker
//  A Manikin to generate a react component styleguidist service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { styleguidistServiceMite } from '../mites/service/styleguidistServiceMite';
import { styleguidistNetworkMite } from '../mites/network/styleguidistNetworkMite';
import styleguidistIcon from '../../images/manikin-icons/styleguidistIcon.png';
import { styleguidistPackageDotJsonMite } from '../mites/custom/styleguidistPackageDotJsonMite';
import { styleguidistStyleguideDotConfigDotJsMite } from '../mites/custom/styleguidistStyleguideDotConfigDotJsMite';
import { styleguidistTsconfigDotJsonMite } from '../mites/custom/styleguidistTsconfigDotJsonMite';
import { styleguidistWebpackDotConfigDotJsMite } from '../mites/custom/styleguidistWebpackDotConfigDotJsMite'
/**
 * styleguidist Manikin
 */
export const styleguidistManikin: IManikin = {
  description: `Styleguidist react component library service`,
  isCore: false,
  isSelected: false,
  folder: `styleguidist`,
  manikinIcon: styleguidistIcon,
  manikinIndex: 23,
  memories: [],
  name: `Styleguidist`,
  mites: [
    styleguidistServiceMite,
    styleguidistNetworkMite,
    styleguidistPackageDotJsonMite,
    styleguidistStyleguideDotConfigDotJsMite,
    styleguidistTsconfigDotJsonMite,
    styleguidistWebpackDotConfigDotJsMite],
  ports: [],
  subfolders: [
    `assets`,
    `components`,
    `configs`,
    `docs`,
    `interfaces`,
    `objects`,
    `typings`],
};