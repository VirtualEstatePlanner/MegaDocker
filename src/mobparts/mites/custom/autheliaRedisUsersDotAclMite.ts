/** @format */

//  autheliaRedisUsersDotAclMite.ts
//  MEGADocker
//  User Access Control List for Authelia's Redis database service
//  Created by George Georgulas IV on 3/29/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const autheliaRedisUsersDotAclMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60002,
  miteFile: {
    path: `ldap/authelia-redis-etc`,
    name: `users`,
    extension: `acl`,
    permissions: `644`,
    contents: `
# authelia backend user
authelia [[LDAPADMINUSERNAME]] on +@all ~* >[[LDAPADMINPASSWORD]]
`,
  },
}
