//  visualizer.ts
//  MegaDocker
//  A Manikin to generate a Docker Swarm container placement visualizer service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { vsCodeServiceMite } from '../mites/service/vsCodeServiceMite';
import { vsCodeNetworkMite } from '../mites/network/vsCodeNetworkMite';
import visualizerIcon from '../../images/manikin-icons/visualizerIcon.png';
import { vsCodePassword } from '../memories/vsCodePassword';

/**
 * visualizer Manikin
 */
export const vsCodeManikin: IManikin = {
  description: `Containerized VS Code IDE`,
  folder: `vscode`,
  isCore: false,
  isSelected: false,
  manikinIcon: visualizerIcon,
  manikinIndex: 18,
  memories: [vsCodePassword],
  mites: [vsCodeServiceMite, vsCodeNetworkMite],
  name: `VS Code`,
  ports: [],
  subfolders: [`project`, `code-server`]
};
