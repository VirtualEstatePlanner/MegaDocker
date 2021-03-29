/** @format */

//  opensourceposLdifMite.ts
//  MEGADocker
//  LDIF Mite for osPOS
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const opensourceposLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50023,
  miteString: `# Begin OSPOS Section

dn: ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OSPOSAdmins,ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OSPOSITAdmins,ou=OSPOSAdmins,ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OSPOSAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: OSPOSAdmins
aliasedObjectName: ou=OSPOSITAdmins,ou=OSPOSAdmins,ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=OSPOSModerators,ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OSPOSITModerators,ou=OSPOSModerators,ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OSPOSModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: OSPOSModerators
aliasedObjectName: ou=OSPOSITModerators,ou=OSPOSModerators,ou=OSPOSUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End OSPOS Section
`,
}
