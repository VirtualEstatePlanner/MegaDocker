/** @format */

//  heimdallLdifMite.ts
//  MEGADocker
//  LDIF Mite for Heimdall
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const heimdallLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50010,
  miteString: `# Begin Heimdall Section

dn: ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HeimdallAdmins,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HeimdallITAdmins,ou=HeimdallAdmins,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HeimdallAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: HeimdallAdmins
aliasedObjectName: ou=HeimdallITAdmins,ou=HeimdallAdmins,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=HeimdallModerators,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HeimdallITModerators,ou=HeimdallAdmins,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HeimdallModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: HeimdallAdmins
aliasedObjectName: ou=HeimdallITModerators,ou=HeimdallModerators,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=HeimdallAdmins,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=HeimdallModerators,ou=HeimdallUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Heimdall Section

`
}
