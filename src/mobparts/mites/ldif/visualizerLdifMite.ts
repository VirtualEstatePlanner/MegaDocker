/** @format */

//  visualizerLdifMite.ts
//  MEGADocker
//  LDIF Mite for Visualizer
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const visualizerLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50034,
  miteString: `# Begin Visualizer Section

dn: ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VisualizerAdmins,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VisualizerITAdmins,ou=VisualizerAdmins,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VisualizerITAdmins,ou=VisualizerAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: VisualizerAdmins
aliasedObjectName: ou=VisualizerITAdmins,ou=VisualizerAdmins,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=VisualizerModerators,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VisualizerITModerators,ou=VisualizerModerators,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=VisualizerModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: VisualizerModerators
aliasedObjectName: ou=VisualizerITModerators,ou=VisualizerModerators,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=VisualizerAdmins,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=VisualizerModerators,ou=VisualizerUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Visualizer Section

`,
}
