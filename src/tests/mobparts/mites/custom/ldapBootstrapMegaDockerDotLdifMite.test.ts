/** @format */

//  ldapBootstrapMegaDockerDotLdifMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { ldapManikin } from '../../../../mobparts/manikins/ldap'
import { ldapBootstrapMegaDockerDotLdifMite } from '../../../../mobparts/mites/custom/ldapBootstrapMegaDockerDotLdifMite'

testCustomMite(ldapBootstrapMegaDockerDotLdifMite, ldapManikin, `ldif`)
