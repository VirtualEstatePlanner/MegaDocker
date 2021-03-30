/** @format */

//  filebrowserLdifMite.ts
//  MEGADocker
//  LDIF Mite for FileBrowser
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const filebrowserLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50006,
  miteString: `# Begin FileBrowser Section

dn: ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FileBrowserAdmins,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FileBrowserITAdmins,ou=FileBrowserAdmins,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FileBrowserAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: FileBrowserAdmins
aliasedObjectName: ou=FileBrowserITAdmins,ou=FileBrowserAdmins,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=FileBrowserModerators,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FileBrowserITModerators,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=FileBrowserModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: FileBrowserModerators
aliasedObjectName: ou=FileBrowserITModerators,ou=FileBrowserModerators,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=FileBrowserAdmins,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=FileBrowserModerators,ou=FileBrowserUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End FileBrowser Section

`,
}
