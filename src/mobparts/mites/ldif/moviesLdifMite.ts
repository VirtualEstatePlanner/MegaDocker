/** @format */

//  moviesLdifMite.ts
//  MEGADocker
//  LDIF Mite for Radarr
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const moviesLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50018,
  miteString: `# Begin Radarr Section

dn: ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RadarrAdmins,ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RadarrITAdmins,ou=RadarrAdmins,ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RadarrAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: RadarrAdmins
aliasedObjectName: ou=RadarrITAdmins,ou=RadarrAdmins,ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=RadarrModerators,ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RadarrITModerators,ou=RadarrModerators,ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RadarrModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: RadarrModerators
aliasedObjectName: ou=RadarrITModerators,ou=RadarrModerators,ou=RadarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Radarr Section
`,
}
