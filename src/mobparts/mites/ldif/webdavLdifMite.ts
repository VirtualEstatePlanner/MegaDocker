/** @format */

//  webdavLdifMite.ts
//  MEGADocker
//  LDIF Mite for WebDAV
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const webdavLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50036,
  miteString: `# Begin WebDAV Section

dn: ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WebDAVAdmins,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WebDAVITAdmins,ou=WebDAVAdmins,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WebDAVAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: WebDAVAdmins
aliasedObjectName: ou=WebDAVITAdmins,ou=WebDAVAdmins,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=WebDAVModerators,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WebDAVITModerators,ou=WebDAVModerators,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WebDAVModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: WebDAVModerators
aliasedObjectName: ou=WebDAVITModerators,ou=WebDAVModerators,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=WebDAVAdmins,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=WebDAVModerators,ou=WebDAVUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End WebDAV Section

`
}
