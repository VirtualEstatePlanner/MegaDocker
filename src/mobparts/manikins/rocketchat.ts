/** @format */

//  rocketchat.ts
//  MegaDocker
//  A Manikin to generate a RocketChat team chat service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { rocketchatServiceMite } from '../mites/service/rocketchatServiceMite'
import { rocketchatNetworkMite } from '../mites/network/rocketchatNetworkMite'
import rocketchatIcon from '../../images/manikin-icons/rocketchatIcon.png'
import { rocketchatBotPassword } from '../memories/rocketchatBotPassword'
import { rocketchatBotUsername } from '../memories/rocketchatBotUsername'

/**
 * rocketchat Manikin
 * replace MVOs
 */
export const rocketchatManikin: IManikin = {
  description: `Collaboration`,
  folder: `rocketchat`,
  // isCore: true,
  // isSelected: true,
  manikinGroups: [`Utility`, `Organization`, `Productivity`],
  isCore: false,
  isSelected: false,
  manikinIcon: rocketchatIcon,
  manikinIndex: 10023,
  memories: [rocketchatBotPassword, rocketchatBotUsername],
  mites: [rocketchatServiceMite, rocketchatNetworkMite],
  name: `RocketChat`,
  ports: [],
  subfolders: [`database`, `dump`, `hubot-scripts`, `uploads`],
}
