//  gitlab.ts
//  MegaDocker
//  A Manikin to generate a GitLab git repository service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import gitlabIcon from '../../images/manikin-icons/gitlabIcon.png';

/**
 * git Manikin
 */
export let gitlabManikin: IManikin = {
  description: `GitLab version control service`,
  folder: `GitLab`,
  isCore: false,
  isSelected: false,
  manikinIcon: gitlabIcon,
  manikinIndex: 3,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `GitLab`,
  ports: [],
  subfolders: []
};
