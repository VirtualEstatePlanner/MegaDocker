/** @format */

//  wordpress.ts
//  MEGADocker
//  A Manikin to generate a WordPress blogging service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { wordpressServiceMite } from '../mites/service/wordpressServiceMite'
import { wordpressNetworkMite } from '../mites/network/wordpressNetworkMite'
import { wordpressMariaDBPassword } from '../memories/wordpressMariaDBPassword'
import { wordpressMariaDBRootPassword } from '../memories/wordpressMariaDBRootPassword'
import { wordpressMariaDBUser } from '../memories/wordpressMariaDBUser'
import wordpressIcon from '../../images/manikin-icons/wordpressIcon.png'
import { wordpressLdifMite } from '../mites/ldif/wordpressLdifMite'

export const wordpressManikin: IManikin = {
  description: `Wordpress Blog`,
  folder: `wordpress`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`, `Development`],
  manikinIcon: wordpressIcon,
  manikinIndex: 10033,
  memories: [wordpressMariaDBRootPassword, wordpressMariaDBUser, wordpressMariaDBPassword],
  mites: [wordpressLdifMite, wordpressServiceMite, wordpressNetworkMite],
  manikinName: `WordPress`,
  ports: [],
  subfolders: [`mariadb`, `php`]
}
