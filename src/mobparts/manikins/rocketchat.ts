//  rocketchat.ts
//  MegaDocker
//  A Manikin to generate a RocketChat team chat service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import rocketchatIcon from '../../images/manikin-icons/rocketchatIcon.png';

/**
 * rocketchat Manikin
 * replace MVOs
 */
export let rocketchatManikin: IManikin = {
  description: `Team chat and collaboration service`,
  folder: `RocketChat`,
  isCore: false,
  isSelected: false,
  manikinIcon: rocketchatIcon,
  manikinIndex: 9,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `RocketChat`,
  ports: [],
  subfolders: [`database`, `dump`, `hubot`, `uploads`]
};
