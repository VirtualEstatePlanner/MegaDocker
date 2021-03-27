/** @format */

//  kanboardLdifMite.ts
//  MEGADocker
//  LDIF Mite for Kanboard
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const kanboardLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 99999,
  miteString: `# Begin Kanboard Section

dn: ou=KanboardUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KanboardAdmins,ou=KanboardUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KanboardITAdmins,ou=KanboardAdmins,ou=KanboardUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KanboardAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: KanboardAdmins
aliasedObjectName: ou=KanboardITAdmins,ou=KanboardAdmins,ou=KanboardUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Kanboard Section
`,
}
