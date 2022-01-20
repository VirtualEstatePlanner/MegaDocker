/** @format */

//  mediarequestsLdifMite.ts
//  MEGADocker
//  LDIF Mite for ombi
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const mediarequestsLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50017,
  miteString: `# Begin Ombi Section

dn: ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OmbiAdmins,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OmbiITAdmins,ou=OmbiAdmins,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OmbiAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: OmbiAdmins
aliasedObjectName: ou=OmbiITAdmins,ou=OmbiAdmins,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=OmbiModerators,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OmbiITModerators,ou=OmbiModerators,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OmbiModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: OmbiModerators
aliasedObjectName: ou=OmbiITModerators,ou=OmbiModerators,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=OmbiAdmins,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=OmbiModerators,ou=OmbiUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Ombi Section

`
}
