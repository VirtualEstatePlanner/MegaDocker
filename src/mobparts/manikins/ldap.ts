//  ldap.ts
//  MegaDocker
//  A Manikin to generate a LDAP service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { ldapAdminPassword } from '../memories/ldapAdminPassword';
// import { ldapAdminUsername } from '../memories/ldapAdminUsername';
import { ldapConfigurationPassword } from '../memories/ldapConfigurationPassword';
import { ldapServiceMite } from '../mites/service/ldapServiceMite';
import { ldapNetworkMite } from '../mites/network/ldapNetworkMite';
import ldapIcon from '../../images/manikin-icons/ldapIcon.png';
import { ldapOrganisation } from '../memories/ldapOrganisation';
import { ldapBootstrapMegaDockerDotLdifMite } from '../mites/custom/ldapBootstrapMegaDockerDotLdifMite';

/**
 * ldap Manikin
 */
export const ldapManikin: IManikin = {
  description: `Lightweight Directory Authentication Protocol authentication service`,
  folder: `ldap`,
  isCore: true,
  isSelected: true,
  // isCore: false,
  // isSelected: false,
  manikinIcon: ldapIcon,
  manikinIndex: 11,
  memories: [
    //    ldapAdminUsername,
    ldapAdminPassword,
    ldapConfigurationPassword,
    ldapOrganisation
  ],
  mites: [ldapServiceMite, ldapNetworkMite, ldapBootstrapMegaDockerDotLdifMite],
  name: `LDAP`,
  ports: [],
  subfolders: [`conf`, `pages`, `log`, `certs`, `lib`, `ldif-files`, `slapd.d`]
};
