//  visualizer.ts
//  MegaDocker
//  A Manikin to generate a Docker Swarm container placement visualizer service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import visualizerIcon from '../../images/manikin-icons/visualizerIcon.png';

/**
 * visualizer Manikin
 */
export let visualizerManikin: IManikin = {
  name: `Visualizer`,
  description: `Docker swarm mode container placement visualization service`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Visualizer`,
  subfolders: [],
  memories: [],
  manikinIcon: visualizerIcon
};
