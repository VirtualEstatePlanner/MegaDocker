//  gitlab.ts
//  MegaDocker
//  A Manikin to generate a GitLab git repository service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { gitlabServiceMite } from '../mites/service/gitlabServiceMite';
import { gitlabNetworkMite } from '../mites/network/gitlabNetworkMite';
import gitlabIcon from '../../images/manikin-icons/gitlabIcon.png';

/**
 * git Manikin
 */
export const gitlabManikin: IManikin = {
  description: `GitLab version control service`,
  folder: `gitlab`,
  isCore: false,
  isSelected: false,
  manikinIcon: gitlabIcon,
  manikinIndex: 3,
  memories: [],
  mites: [gitlabServiceMite, gitlabNetworkMite],
  name: `GitLab`,
  ports: [],
  subfolders: []
};
