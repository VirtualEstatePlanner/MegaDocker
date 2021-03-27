/** @format */

//  duplicatiLdifMite.ts
//  MEGADocker
//  LDIF Mite for duplicati
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const duplicatiLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50003,
  miteString: `# Begin Duplicati Section

dn: ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=DuplicatiAdmins,ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=DuplicatiModerators,ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=DuplicatiAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: DuplicatiAdmins
aliasedObjectName: ou=DuplicatiITAdmins,ou=DuplicatiAdmins,ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=DuplicatiModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: DuplicatiModerators
aliasedObjectName: ou=DuplicatiITModerators,ou=DuplicatiModerators,ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Duplicati Section
`,
}
