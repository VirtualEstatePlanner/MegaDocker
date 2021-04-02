/** @format */

//  rocketchatLdifMite.ts
//  MEGADocker
//  LDIF Mite for Rocketchat
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const rocketchatLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50028,
  miteString: `# Begin Rocketchat Section

dn: ou=RocketchatGuestUsers,ou=ExternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatAdmins,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatITAdmins,ou=RocketchatAdmins,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: RocketchatAdmins
aliasedObjectName: ou=RocketchatITAdmins,ou=RocketchatAdmins,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=RocketchatModerators,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatITModerators,ou=RocketchatModerators,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: RocketchatModerators
aliasedObjectName: ou=RocketchatITModerators,ou=RocketchatModerators,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=RocketchatAdmins,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=RocketchatModerators,ou=RocketchatUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Rocketchat Section

`,
}
