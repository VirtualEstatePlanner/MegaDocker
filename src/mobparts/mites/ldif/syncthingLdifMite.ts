/** @format */

//  syncthingLdifMite.ts
//  MEGADocker
//  LDIF Mite for Syncthing
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const syncthingLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50031,
  miteString: `# Begin Syncthing Section

dn: ou=SyncthingUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SyncthingAdmins,ou=SyncthingUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SyncthingModerators,ou=SyncthingUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SyncthingAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: SyncthingAdmins
aliasedObjectName: ou=SyncthingITAdmins,ou=SyncthingAdmins,ou=SyncthingUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=SyncthingModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: SyncthingModerators
aliasedObjectName: ou=SyncthingITModerators,ou=SyncthingModerators,ou=SyncthingUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Syncthing Section
`,
}
