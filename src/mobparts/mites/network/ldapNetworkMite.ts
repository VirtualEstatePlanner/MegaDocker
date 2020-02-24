//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for LDAP
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ldapNetworkMite: IMite = {
  type: `DockerSwarmNetwork`,
  miteIndex: 1005,
  miteString: `

#Begin LDAP Network Section

 ldap:
  external: true

#End LDAP Network Section

`
};
