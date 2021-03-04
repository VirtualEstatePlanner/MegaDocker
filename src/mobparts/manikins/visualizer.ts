//  visualizer.ts
//  MegaDocker
//  A Manikin to generate a Docker Swarm container placement visualizer service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { visualizerServiceMite } from '../mites/service/visualizerServiceMite';
import { visualizerNetworkMite } from '../mites/network/visualizerNetworkMite';
import visualizerIcon from '../../images/manikin-icons/visualizerIcon.png';

/**
 * visualizer Manikin
 */
export const visualizerManikin: IManikin = {
  description: `Docker swarm mode container placement visualization service`,
  folder: `visualizer`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Monitoring`, `Utility`],
  manikinIcon: visualizerIcon,
  manikinIndex: 10029,
  memories: [],
  mites: [visualizerServiceMite, visualizerNetworkMite],
  name: `Visualizer`,
  ports: [],
  subfolders: [],
};
