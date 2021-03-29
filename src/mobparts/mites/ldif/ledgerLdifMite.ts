/** @format */

//  ledgerLdifMite.ts
//  MEGADocker
//  LDIF Mite for LedgerSMB
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/ILDIFMite'

export const ledgerLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50014,
  miteString: `# Begin LedgerSMB Section

dn: ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LedgerSMBAdmins,ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LedgerSMBITAdmins,ou=LedgerSMBAdmins,ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LedgerSMBAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LedgerSMBAdmins
aliasedObjectName: ou=LedgerSMBITAdmins,ou=LedgerSMBAdmins,ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=LedgerSMBModerators,ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LedgerSMBITModerators,ou=LedgerSMBModerators,ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=LedgerSMBModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: LedgerSMBModerators
aliasedObjectName: ou=LedgerSMBITModerators,ou=LedgerSMBModerators,ou=LedgerSMBUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

# End LedgerSMB Section
`,
}
