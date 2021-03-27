/** @format */

//  swarmpitLdifMite.ts
//  MEGADocker
//  LDIF Mite for Swarmpit
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const swarmpitLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 99999,
  miteString: `# Begin Swarmpit section

dn: ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SwarmpitAdmins,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SwarmpitITAdmins,ou=SwarmpitAdmins,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SwarmpitAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: SwarmpitAdmins
aliasedObjectName: ou=SwarmpitITAdmins,ou=SwarmpitAdmins,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Swarmpit Section
`,
}
