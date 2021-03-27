/** @format */

//  piholeLdifMite.ts
//  MEGADocker
//  LDIF Mite for Pihole
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const piholeLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 99999,
  miteString: `# Begin Pihole Section

dn: ou=PiholeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PiholeAdmins,ou=PiholeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PiholeITAdmins,ou=PiholeAdmins,ou=PiholeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PiholeAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PiholeAdmins
aliasedObjectName: ou=PiholeITAdmins,ou=PiholeAdmins,ou=PiholeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Pihole Section
`,
}
