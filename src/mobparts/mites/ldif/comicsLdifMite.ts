/** @format */

//  comicsLdifMite.ts
//  MEGADocker
//  LDIF Mite for Mylar
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const comicsLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50001,
  miteString: `# Begin Mylar Section

dn: ou=MylarUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MylarAdmins,ou=MylarUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MylarAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PortainerAdmins
aliasedObjectName: ou=MylarITAdmins,ou=MylarAdmins,ou=MylarUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Mylar Section
`,
}
