/** @format */

//  plexLdifMite.ts
//  MEGADocker
//  LDIF Mite for Plex
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const plexLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50026,
  miteString: `# Begin PlexMediaServer Section

dn: ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PlexMediaServerAdmins,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PlexMediaServerITAdmins,ou=PlexMediaServerAdmins,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PlexMediaServerAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PlexMediaServerAdmins
aliasedObjectName: ou=PlexMediaServerITAdmins,ou=PlexMediaServerAdmins,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=PlexMediaServerModerators,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PlexMediaServerITModerators,ou=PlexMediaServerModerators,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PlexMediaServerModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PlexMediaServerModerators
aliasedObjectName: ou=PlexMediaServerITModerators,ou=PlexMediaServerModerators,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=PlexMediaServerAdmins,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=PlexMediaServerModerators,ou=PlexMediaServerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End PlexMediaServer Section
`,
}
