/** @format */

//  traefikNetworkMite.ts
//  MEGADocker
//  Network Mite for LDAP
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/objectInterfaces/IMite'

export const ldapNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 40011,
  miteString: `

# Begin LDAP Network Section

 ldap:
  driver: overlay

# End LDAP Network Section

`,
}
