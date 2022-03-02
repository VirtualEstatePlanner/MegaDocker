/** @format */

//  ldapAdminPassword.ts
//  MEGADocker
//  The variable for the LDAP administrative user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { passwordValidator } from '../../functions/validators/passwordValidator'

export const ledgerPostgresPassword: IMemory = {
  memoryIndex: 20024,
  memoryMarker: `[[LEDGERPOSTGRESPASSWORD]]`,
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  memoryName: `Ledger Postgres Password`,
  tooltip: `The LedgerSMB Postgres user's password`,
  memoryValue: ``,
  valueType: `password`,
  isReady: false,
  validator: passwordValidator
}
