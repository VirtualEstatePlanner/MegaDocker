/** @format */

//  booksLdifMite.ts
//  MEGADocker
//  LDIF Mite for LazyLibrarian
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const booksLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50000,
  miteString: `# Begin LazyLibrarian Section

dn: ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LazyLibrarianAdmins,ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LazyLibrarianITAdmins,ou=LazyLibrarianAdmins,ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LazyLibrarianAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PortainerAdmins
aliasedObjectName: ou=LazyLibrarianITAdmins,ou=LazyLibrarianAdmins,ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=LazyLibrarianModerators,ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LazyLibrarianITModerators,ou=LazyLibrarianModerators,ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LazyLibrarianModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PortainerAdmins
aliasedObjectName: ou=LazyLibrarianITModerators,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=LazyLibrarianAdmins,ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Supers,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=LazyLibrarianModerators,ou=DuplicatiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End LazyLibrarian Section
`,
}
