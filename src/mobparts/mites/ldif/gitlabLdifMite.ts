/** @format */

//  gitlabLdifMite.ts
//  MEGADocker
//  LDIF Mite for GitLab
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const gitlabLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50008,
  miteString: `# Begin GitLab section

dn: ou=GitlabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GitLabAdmins,ou=GitlabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GitLabITAdmins,ou=GitLabAdmins,ou=GitlabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GitLabAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: GitLabAdmins
aliasedObjectName: ou=GitLabITAdmins,ou=GitLabAdmins,ou=GitLabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=GitLabModerators,ou=GitlabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GitLabITModerators,ou=GitLabModerators,ou=GitlabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GitLabModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: GitLabAdmins
aliasedObjectName: ou=GitLabITModerators,ou=GitLabModerators,ou=GitLabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=GitLabAdmins,ou=GitLabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=GitLabModerators,ou=GitLabUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End GitLab section

`
}
