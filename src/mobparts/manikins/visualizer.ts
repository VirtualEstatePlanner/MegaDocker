//  visualizer.ts
//  MegaDocker
//  A Manikin to generate a Docker Swarm container placement visualizer service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import visualizerIcon from '../../images/manikin-icons/visualizerIcon.png';

/**
 * visualizer Manikin
 */
export let visualizerManikin: IManikin = {
  description: `Docker swarm mode container placement visualization service`,
  folder: `Visualizer`,
  isCore: false,
  isSelected: false,
  manikinIcon: visualizerIcon,
  manikinIndex: 13,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `Visualizer`,
  ports: [],
  subfolders: []
};
