/** @format */

//  nginxLdifMite.ts
//  MEGADocker
//  LDIF Mite for Nginx
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const nginxLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50022,
  miteString: `# Begin Nginx Section

dn: ou=NginxUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NginxAdmins,ou=NginxUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NginxModerators,ou=NginxUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NginxAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: NginxAdmins
aliasedObjectName: ou=NginxITAdmins,ou=NginxAdmins,ou=NginxUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=NginxModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: NginxModerators
aliasedObjectName: ou=NginxITModerators,ou=NginxModerators,ou=NginxUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Nginx Section
`,
}
