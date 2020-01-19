//  gitlab.ts
//  MegaDocker
//  A Manikin to generate a GitLab git repository service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import gitlabIcon from '../../images/manikin-icons/gitlabIcon.png';

/**
 * git Manikin
 */
export let gitlabManikin: IManikin = {
  name: `GitLab`,
  description: `GitLab version control server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `GitLab`,
  subfolders: [],
  memories: [],
  manikinIcon: gitlabIcon
};
