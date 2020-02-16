//  ldap.ts
//  MegaDocker
//  A Manikin to generate a LDAP service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { ldapAdminPassword } from '../memories/ldapAdminPassword';
import { ldapAdminUsername } from '../memories/ldapAdminUsername';
import { ldapConfigurationPassword } from '../memories/ldapConfigurationPassword';
import { ldapServiceMite } from '../mites/service/ldapServiceMite';
import { ldapNetworkMite } from '../mites/network/ldapNetworkMite';
import ldapIcon from '../../images/manikin-icons/ldapIcon.png';

/**
 * ldap Manikin
 */
export let ldapManikin: IManikin = {
  description: `Lightweight Directory Authentication Protocol authentication service`,
  folder: `LDAP`,
  isCore: false,
  isSelected: false,
  manikinIcon: ldapIcon,
  manikinIndex: 4,
  memories: [ldapAdminUsername, ldapAdminPassword, ldapConfigurationPassword],
  mites: [ldapServiceMite, ldapNetworkMite],
  name: `LDAP`,
  ports: [],
  subfolders: [`conf`, `pages`, `log`]
};
