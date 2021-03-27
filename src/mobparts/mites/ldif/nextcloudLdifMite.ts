/** @format */

//  nextcloudLdifMite.ts
//  MEGADocker
//  LDIF Mite for Nextcloud
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const nextcloudLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 99999,
  miteString: `# Begin Nextcloud Section

dn: ou=NextcloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NextcloudModerators,ou=NextcloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NextcloudAdmins,ou=NextcloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NextcloudITAdmins,ou=NextcloudAdmins,ou=NextcloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NextcloudAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: NextcloudAdmins
aliasedObjectName: ou=NextcloudITAdmins,ou=NextcloudAdmins,ou=NextcloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=NextcloudModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: NextcloudModerators
aliasedObjectName: ou=NextcloudITModerators,ou=NextcloudModerators,ou=NextcloudUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Nextcloud Section
`,
}
