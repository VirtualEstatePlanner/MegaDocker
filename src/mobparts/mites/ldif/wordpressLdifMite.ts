/** @format */

//  wordpressLdifMite.ts
//  MEGADocker
//  LDIF Mite for WordPress
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const wordpressLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50037,
  miteString: `# Begin WordPress Section

dn: ou=WordpressGuestUsers,ou=ExternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]  
objectclass: organizationalUnit

dn: ou=WordpressAdmins,ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WordpressITAdmins,ou=WordpressAdmins,ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WordpressAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: WordpressAdmins
aliasedObjectName: ou=WordpressITAdmins,ou=WordpressAdmins,ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=WordpressModerators,ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WordpressITModerators,ou=WordpressModerators,ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WordpressModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: WordpressModerators
aliasedObjectName: ou=WordpressITModerators,ou=WordpressModerators,ou=WordpressUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End WordPress Section`,
}
