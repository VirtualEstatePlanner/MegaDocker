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

dn: ou=LazyLibrarianModerators,ou=LazyLibrarianUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End LazyLibrarian Section
`,
}
