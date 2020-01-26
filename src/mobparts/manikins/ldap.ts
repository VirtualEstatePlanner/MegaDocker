//  ldap.ts
//  MegaDocker
//  A Manikin to generate a LDAP service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { ldapAdminPassword } from '../memories/ldapAdminPassword';
import { ldapAdminUsername } from '../memories/ldapAdminUsername';
import { ldapConfigurationPassword } from '../memories/ldapConfigurationPassword';
import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import ldapIcon from '../../images/manikin-icons/ldapIcon.png';

/**
 * ldap Manikin
 */
export let ldapManikin: IManikin = {
  name: `LDAP`,
  description: `Lightweight Directory Authentication Protocol authentication service`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `LDAP`,
  subfolders: [`conf`, `pages`, `log`],
  memories: [ldapAdminUsername, ldapAdminPassword, ldapConfigurationPassword],
  manikinIcon: ldapIcon
};
