/** @format */

//  gitlab.ts
//  MEGADocker
//  A Manikin to generate a GitLab git repository service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { gitlabServiceMite } from '../mites/service/gitlabServiceMite'
import { gitlabNetworkMite } from '../mites/network/gitlabNetworkMite'
import { gitlabPostgresPassword } from '../memories/gitlabPostgresPassword'
import { gitlabPostgresUser } from '../memories/gitlabPostgresUser'
import { gitlabRootEmail } from '../memories/gitlabRootEmail'
import { gitlabRootPassword } from '../memories/gitlabRootPassword'
import gitlabIcon from '../../images/manikin-icons/gitlabIcon.png'
import { gitlabLdifMite } from '../mites/ldif/gitlabLdifMite'

/**
 * git Manikin
 */
export const gitlabManikin: IManikin = {
  description: `Version Control`,
  folder: `gitlab`,
  // isCore: true,
  // isSelected: true,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Development`],
  manikinIcon: gitlabIcon,
  manikinIndex: 10008,
  memories: [gitlabPostgresPassword, gitlabPostgresUser, gitlabRootEmail, gitlabRootPassword],
  mites: [gitlabLdifMite, gitlabServiceMite, gitlabNetworkMite],
  name: `GitLab`,
  ports: [],
  subfolders: [`config`, `data`, `logs`, `postgresql`, `redis`],
}
