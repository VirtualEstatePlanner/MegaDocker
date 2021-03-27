/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const ldapBootstrapMegaDockerDotLdifMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50007,
  miteFile: {
    path: `ldap/ldif-files`,
    name: `51-bootstrap-megadocker`,
    extension: `ldif`,
    permissions: `644`,
    contents: `# MegaDocker 51-bootstrap-megadocker.ldif file for [[MOBNAME]]
# base domain name for ldap was automatically generated from [[PRIMARYDOMAIN]]

version: 1
    
dn: ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Customers,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Technicians,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Vendors,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Employees,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Managers,ou=Employees,ou=Users,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Users,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaUsers,ou=Employees,ou=Users,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=EmailUsers,ou=Employees,ou=Users,ou=People,dc=ldap,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

`,
  },
}
