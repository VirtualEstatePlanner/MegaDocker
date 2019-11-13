//  ldap.ts
//  MegaDocker
//  A Manikin to generate a  service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { ldapAdminPassword } from '../memories/ldapAdminPassword';
import { ldapAdminUsername } from '../memories/ldapAdminUsername';
import { ldapConfigurationPassword } from '../memories/ldapConfigurationPassword';
import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';

/**
 * ldap Manikin
 */
export let ldapManikin: IManikin = {
  name: `LDAP`,
  description: `Lightweight Directory Authentication Protocol Authentication server`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `LDAP`,
  subfolders: [`conf`, `pages`, `log`],
  memories: [ldapAdminUsername, ldapAdminPassword, ldapConfigurationPassword],
  manikinIcon: defaultIcon
};
