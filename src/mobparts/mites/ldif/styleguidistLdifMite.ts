/** @format */

//  styleguidistLdifMite.ts
//  MEGADocker
//  LDIF Mite for Styleguidist
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const styleguidistLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50029,
  miteString: `# Begin Styleguidist Section

dn: ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=StyleguidistAdmins,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=StyleguidistITAdmins,ou=StyleguidistAdmins,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=StyleguidistAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: StyleguidistAdmins
aliasedObjectName: ou=StyleguidistITAdmins,ou=StyleguidistAdmins,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=StyleguidistModerators,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=StyleguidistITModerators,ou=StyleguidistModerators,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=StyleguidistModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: StyleguidistModerators
aliasedObjectName: ou=StyleguidistITModerators,ou=StyleguidistModerators,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=StyleguidistAdmins,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=StyleguidistModerators,ou=StyleguidistUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Styleguidist Section

`,
}
