/** @format */

//  elk.ts
//  MEGADocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { emailServiceMite } from '../mites/service/emailServiceMite'
import { emailNetworkMite } from '../mites/network/emailNetworkMite'
import emailIcon from '../../images/manikin-icons/emailIcon.png'
import { emailLdifMite } from '../mites/ldif/emailLdifMite'

/**
 * elk Manikin
 */
export const emailManikin: IManikin = {
  description: `Email and Webmail`,
  folder: `email`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Utility`],
  manikinIcon: emailIcon,
  manikinIndex: 10005,
  memories: [],
  mites: [emailLdifMite, emailServiceMite, emailNetworkMite],
  name: `E-mail`,
  ports: [],
  subfolders: [`config`, `maildata`, `mailstate`, `rainloop`]
}
