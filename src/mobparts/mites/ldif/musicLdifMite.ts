/** @format */

//  musicLdifMite.ts
//  MEGADocker
//  LDIF Mite for Lidarr
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const musicLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50019,
  miteString: `# Begin Lidarr Section

dn: ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrAdmins,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrITAdmins,ou=LidarrAdmins,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LidarrAdmins
aliasedObjectName: ou=LidarrITAdmins,ou=LidarrAdmins,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=LidarrModerators,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrITModerators,ou=LidarrModerators,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LidarrModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LidarrModerators
aliasedObjectName: ou=LidarrITModerators,ou=LidarrModerators,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=LidarrAdmins,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=LidarrModerators,ou=LidarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Lidarr Section

`
}
