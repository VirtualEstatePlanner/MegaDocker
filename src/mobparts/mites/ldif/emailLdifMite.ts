/** @format */

//  emailLdifMite.ts
//  MEGADocker
//  LDIF Mite for Email
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const emailLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50005,
  miteString: `

# Begin Email Section

dn: ou=EmailUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=EmailAdmins,ou=EmailUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=EmailITAdmins,ou=EmailAdmins,ou=EmailUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=EmailAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: EmailAdmins
aliasedObjectName: ou=EmailITAdmins,ou=EmailAdmins,ou=EmailUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Email Section

`,
}
