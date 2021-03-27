/** @format */

//  traefikLdifMite.ts
//  MEGADocker
//  LDIF Mite for Traefik
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const traefikLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 99999,
  miteString: `# Begin Traefik Section

dn: ou=TraefikUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=TraefikAdmins,ou=TraefikUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=TraefikITAdmins,ou=TraefikAdmins,ou=TraefikUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=TraefikAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: TraefikAdmins
aliasedObjectName: ou=TraefikITAdmins,ou=TraefikAdmins,ou=TraefikUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End LDIF Section`,
}
