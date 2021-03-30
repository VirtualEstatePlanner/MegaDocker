/** @format */

//  swarmpitLdifMite.ts
//  MEGADocker
//  LDIF Mite for Swarmpit
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const swarmpitLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50030,
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

dn: ou=SwarmpitModerators,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SwarmpitITModerators,ou=SwarmpitModerators,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SwarmpitModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: SwarmpitModerators
aliasedObjectName: ou=SwarmpitITModerators,ou=SwarmpitModerators,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=SwarmpitAdmins,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=SwarmpitModerators,ou=SwarmpitUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Swarmpit Section
`,
}
