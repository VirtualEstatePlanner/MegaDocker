/** @format */

//  owncloudLdifMite.ts
//  MEGADocker
//  LDIF Mite for Owncloud
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const owncloudLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50024,
  miteString: `# Begin Owncloud Section

dn: ou=OwncloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OwncloudModerators,ou=OwncloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OwncloudAdmins,ou=OwncloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OwncloudITAdmins,ou=OwncloudAdmins,ou=OwncloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OwncloudAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: OwncloudAdmins
aliasedObjectName: ou=OwncloudITAdmins,ou=OwncloudAdmins,ou=OwnCloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=OwncloudModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: OwncloudModerators
aliasedObjectName: ou=OwncloudITModerators,ou=OwncloudModerators,ou=OwncloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# Begin Owncloud Section
`,
}
