/** @format */

//  portainerLdifMite.ts
//  MEGADocker
//  LDIF Mite for Portainer
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const portainerLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 99999,
  miteString: `# Begin Portainer Section

dn: ou=PortainerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PortainerAdmins,ou=PortainerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PortainerITAdmins,ou=PortainerAdmins,ou=PortainerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PortainerAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: PortainerAdmins
aliasedObjectName: ou=PortainerITAdmins,ou=PortainerAdmins,ou=PortainerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End Portainer Section
`,
}
