/** @format */

//  gitlabLdifMite.ts
//  MEGADocker
//  LDIF Mite for GitLab
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

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

# End GitLab section`,
}
