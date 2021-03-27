/** @format */

//  mealieLdifMite.ts
//  MEGADocker
//  LDIF Mite for Mealie
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const mealieLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50016,
  miteString: `# Begin Mealie Section

dn: ou=MealieUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MealieAdmins,ou=MealieUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MealieModerators,ou=MealieUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=MealieAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: MealieAdmins
aliasedObjectName: ou=MealieITAdmins,ou=MealieAdmins,ou=MealieUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=MealieModeratorss,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: MealieModerators
aliasedObjectName: ou=MealieITModerators,ou=MealieModerators,ou=MealieUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Mealie Section

`,
}
