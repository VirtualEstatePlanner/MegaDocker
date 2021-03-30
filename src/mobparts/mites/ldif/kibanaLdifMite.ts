/** @format */

//  kibanaLdifMite.ts
//  MEGADocker
//  LDIF Mite for Kibana
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const kibanaLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50012,
  miteString: `# Begin Kibana Section

dn: ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaAdmins,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaITAdmins,ou=KibanaAdmins,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: KibanaAdmins
aliasedObjectName: ou=KibanaITAdmins,ou=KibanaAdmins,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=KibanaModerators,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaITModerators,ou=KibanaModerators,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: KibanaAdmins
aliasedObjectName: ou=KibanaITModerators,ou=KibanaModerators,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=KibanaAdmins,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=KibanaModerators,ou=KibanaUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Kibana Section

`,
}
