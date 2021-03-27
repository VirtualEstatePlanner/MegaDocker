/** @format */

//  visualizer.ts
//  MEGADocker
//  A Manikin to generate a Docker Swarm container placement visualizer service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { vsCodeServiceMite } from '../mites/service/vsCodeServiceMite'
import { vsCodeNetworkMite } from '../mites/network/vsCodeNetworkMite'
import vsCodeIcon from '../../images/manikin-icons/vsCodeIcon.png'
import { vsCodePassword } from '../memories/vsCodePassword'
import { vsCodeIndexDotHtmlMite } from '../mites/custom/vsCodeIndexDotHtmlMite'
import { vscodeLdifMite } from '../mites/ldif/vscodeLdifMite'

/**
 * visualizer Manikin
 */
export const vsCodeManikin: IManikin = {
  description: `Integrated Development Environment`,
  folder: `vscode`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Development`],
  manikinIcon: vsCodeIcon,
  manikinIndex: 10031,
  memories: [vsCodePassword],
  mites: [vscodeLdifMite, vsCodeServiceMite, vsCodeNetworkMite, vsCodeIndexDotHtmlMite],
  name: `VS Code`,
  ports: [],
  subfolders: [`project`, `pages`],
}
