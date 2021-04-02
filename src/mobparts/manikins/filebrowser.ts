/** @format */

//  elk.ts
//  MEGADocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { filebrowserServiceMite } from '../mites/service/filebrowserServiceMite'
import filebrowserIcon from '../../images/manikin-icons/filebrowserIcon.png'
import { filebrowserDatabaseDotDbMite } from '../mites/custom/filebrowserDatabaseDotDbMite'
import { filebrowserLdifMite } from '../mites/ldif/filebrowserLdifMite'

/**
 * elk Manikin
 */
export const filebrowserManikin: IManikin = {
  description: `File Sharing`,
  folder: `filebrowser`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`],
  manikinIcon: filebrowserIcon,
  manikinIndex: 10006,
  memories: [],
  mites: [filebrowserLdifMite, filebrowserServiceMite, filebrowserDatabaseDotDbMite],
  name: `FileBrowser`,
  ports: [],
  subfolders: [`data`],
}
