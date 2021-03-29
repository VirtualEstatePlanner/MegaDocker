/** @format */

//  logstashLdifMite.ts
//  MEGADocker
//  LDIF Mite for Logstash
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const logstashLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50015,
  miteString: `# Begin Logstash Section

dn: ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LogstashAdmins,ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LogstashITAdmins,ou=LogstashAdmins,ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LogstashAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LogstashAdmins
aliasedObjectName: ou=LogstashITAdmins,ou=LogstashAdmins,ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=LogstashModerators,ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LogstashITModerators,ou=LogstashModerators,ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LogstashModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LogstashModerators
aliasedObjectName: ou=LogstashITModerators,ou=LogstashModerators,ou=LogstashUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Logstash Section
`,
}
