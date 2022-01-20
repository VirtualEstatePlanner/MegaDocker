/** @format */

//  elasticsearchLdifMite.ts
//  MEGADocker
//  LDIF Mite for Elasticsearch
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ILDIFMite } from '../../../interfaces/miteTypeInterfaces/ILDIFMite'

export const elasticsearchLdifMite: ILDIFMite = {
  type: `LDIF`,
  miteIndex: 50004,
  miteString: `# Begin Elasticsearch Section

dn: ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ElasticsearchAdmins,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ElasticsearchITAdmins,ou=ElasticsearchAdmins,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ElasticsearchAdmins,ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: ElasticsearchAdmins
aliasedObjectName: ou=ElasticsearchITAdmins,ou=ElasticsearchAdmins,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: ou=ElasticsearchModerators,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ElasticsearchITModerators,ou=ElasticsearchModerators,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ElasticsearchModerators,ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
ou: ElasticsearchModerators
aliasedObjectName: ou=ElasticsearchITModerators,ou=ElasticsearchModerators,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]

dn: cn=SuperAdmins,ou=ElasticsearchAdmins,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperAdmins
aliasedObjectName: cn=SuperAdmins,ou=Groups,[[LDAPDOMAINASDCS]]

dn: cn=SuperModerators,ou=ElasticsearchModerators,ou=ElasticsearchUsers,ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: alias
objectclass: extensibleobject
cn: SuperModerators
aliasedObjectName: cn=SuperModerators,ou=Groups,[[LDAPDOMAINASDCS]]

# End Elasticsearch Section

`
}
