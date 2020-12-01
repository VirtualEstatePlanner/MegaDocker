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
import { ldapOrganisation } from '../memories/ldapOrganisation';
import { ldapBootstrapMegaDockerDotLdifMite } from '../mites/custom/ldapBootstrapMegaDockerDotLdifMite';
import { autheliaDotConfMite } from '../mites/custom/autheliaDotConfMite';

/**
 * ldap Manikin
 */
export const ldapManikin: IManikin = {
  description: `Lightweight Directory Authentication Protocol authentication service`,
  folder: `ldap`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`Core`, `Utility`],
  manikinIcon: ldapIcon,
  manikinIndex: 12,
  memories: [
    ldapAdminUsername,
    ldapAdminPassword,
    ldapConfigurationPassword,
    ldapOrganisation,
  ],
  mites: [
    autheliaDotConfMite,
    ldapServiceMite,
    ldapNetworkMite,
    ldapBootstrapMegaDockerDotLdifMite,
  ],
  name: `LDAP`,
  ports: [],
  subfolders: [
    `authelia-conf`,
    `authelia-data`,
    `authelia-mariadb`,
    `conf`,
    `pages`,
    `log`,
    `certs`,
    `lib`,
    `ldif-files`,
    `slapd.d`,
  ],
};
