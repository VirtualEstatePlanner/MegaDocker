/** @format */

//  ldap.ts
//  MEGADocker
//  A Manikin to generate a LDAP service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { ldapAdminPassword } from '../memories/ldapAdminPassword'
import { ldapAdminUsername } from '../memories/ldapAdminUsername'
import { ldapConfigurationPassword } from '../memories/ldapConfigurationPassword'
import { ldapServiceMite } from '../mites/service/ldapServiceMite'
import { ldapNetworkMite } from '../mites/network/ldapNetworkMite'
import ldapIcon from '../../images/manikin-icons/ldapIcon.png'
import { ldapOrganisation } from '../memories/ldapOrganisation'
import { ldapBootstrapMegaDockerDotLdifMite } from '../mites/custom/ldapBootstrapMegaDockerDotLdifMite'
import { autheliaDotConfMite } from '../mites/custom/autheliaDotConfMite'
import { autheliaMariaDBPassword } from '../memories/autheliaMariaDBPassword'
import { autheliaMariaDBRootPassword } from '../memories/autheliaMariaDBRootPassword'
import { autheliaMariaDBUser } from '../memories/autheliaMariaDBUser'
import { ldapLdifMite } from '../mites/ldif/ldapLdifMite'
import { autheliaRedisDotConfMite } from '../mites/custom/autheliaRedisDotConfMite'
import { autheliaRedisUsersDotAclMite } from '../mites/custom/autheliaRedisUsersDotAclMite'
import { autheliaRedisPassword } from '../memories/autheliaRedisPassword'
import { autheliaRedisUser } from '../memories/autheliaRedisUser'

/**
 * ldap Manikin
 */
export const ldapManikin: IManikin = {
  description: `Authentication`,
  folder: `ldap`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`MegaDockerCore`, `Utility`],
  manikinIcon: ldapIcon,
  manikinIndex: 10012,
  memories: [
    autheliaMariaDBPassword,
    autheliaMariaDBRootPassword,
    autheliaMariaDBUser,
    autheliaRedisPassword,
    autheliaRedisUser,
    ldapAdminUsername,
    ldapAdminPassword,
    ldapConfigurationPassword,
    ldapOrganisation
  ],
  mites: [ldapLdifMite, autheliaDotConfMite, autheliaRedisDotConfMite, autheliaRedisDotConfMite, autheliaRedisUsersDotAclMite, ldapServiceMite, ldapNetworkMite, ldapBootstrapMegaDockerDotLdifMite],
  name: `LDAP`,
  ports: [],
  subfolders: [
    `authelia-conf`,
    `authelia-data`,
    `authelia-mariadb`,
    `authelia-redis-conf`,
    `authelia-redis-data`,
    `authelia-redis-dump`,
    `authelia-redis-users`,
    `openldap-lib`,
    `openldap-ldif-files`,
    `openldap-slapd.d`
  ]
}
