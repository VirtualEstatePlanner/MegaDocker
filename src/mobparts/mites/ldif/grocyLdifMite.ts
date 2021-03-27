/** @format */

//  grocyLdifMite.ts
//  MEGADocker
//  LDIF Mite for Grocy
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const grocyLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50009,
  miteString: `# Begin Grocy Section

dn: ou=GrocyUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GrocyAdmins,ou=GrocyUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GrocyModerators,ou=GrocyUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GrocyAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: GrocyAdmins
aliasedObjectName: ou=GrocyITAdmins,ou=GrocyAdmins,ou=GrocyUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=GrocyModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: GrocyModerators
aliasedObjectName: ou=GrocyITModerators,ou=GrocyModerators,ou=GrocyUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Grocy Section
`,
}
