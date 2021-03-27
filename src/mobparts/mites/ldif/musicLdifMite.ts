/** @format */

//  LdifMite.ts
//  MEGADocker
//  LDIF Mite for
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const LdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50019,
  miteString: `# Begin Lidarr Section

dn: ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrAdmins,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrModerators,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LidarrAdmins
aliasedObjectName: ou=LidarrITAdmins,ou=LidarrAdmins,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=LidarrModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LidarrModerators
aliasedObjectName: ou=LidarrITModerators,ou=LidarrModerators,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Lidarr Section
`,
}
