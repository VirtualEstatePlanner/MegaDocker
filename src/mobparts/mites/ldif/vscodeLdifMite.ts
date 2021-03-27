/** @format */

//  vscodeLdifMite.ts
//  MEGADocker
//  LDIF Mite for vscode
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const vscodeLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50035,
  miteString: `# Begin VSCode Section

dn: ou=VSCodeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VSCodeAdmins,ou=VSCodeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VSCodeModerators,ou=VSCodeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VSCodeAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: VSCodeAdmins
aliasedObjectName: ou=VSCodeITAdmins,ou=VSCodeAdmins,ou=VSCodeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=VSCodeModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: VSCodeModerators
aliasedObjectName: ou=VSCodeITModerators,ou=VSCodeModerators,ou=VSCodeUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End VSCode Section
`,
}
