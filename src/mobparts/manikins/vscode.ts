/** @format */

//  visualizer.ts
//  MegaDocker
//  A Manikin to generate a Docker Swarm container placement visualizer service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { vsCodeServiceMite } from '../mites/service/vsCodeServiceMite'
import { vsCodeNetworkMite } from '../mites/network/vsCodeNetworkMite'
import vsCodeIcon from '../../images/manikin-icons/vsCodeIcon.png'
import { vsCodePassword } from '../memories/vsCodePassword'
import { vsCodeIndexDotHtmlMite } from '../mites/custom/vsCodeIndexDotHtmlMite'

/**
 * visualizer Manikin
 */
export const vsCodeManikin: IManikin = {
  description: `Containerized VS Code IDE`,
  folder: `vscode`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Development`],
  manikinIcon: vsCodeIcon,
  manikinIndex: 10030,
  memories: [vsCodePassword],
  mites: [vsCodeServiceMite, vsCodeNetworkMite, vsCodeIndexDotHtmlMite],
  name: `VS Code`,
  ports: [],
  subfolders: [`project`, `pages`],
}
