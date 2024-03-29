/** @format */

//  tvLdifMite.ts
//  MEGADocker
//  LDIF Mite for Sonarr
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const tvLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50033,
  miteString: `# Begin Sonarr Section

dn: ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SonarrAdmins,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SonarrITAdmins,ou=SonarrAdmins,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SonarrAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: SonarrAdmins
aliasedObjectName: ou=SonarrITAdmins,ou=SonarrAdmins,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=SonarrModerators,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SonarrITModerators,ou=SonarrModerators,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SonarrModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: SonarrModerators
aliasedObjectName: ou=SonarrITModerators,ou=SonarrModerators,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=SonarrAdmins,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=SonarrModerators,ou=SonarrUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Sonarr Section

`
}
