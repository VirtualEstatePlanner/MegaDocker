/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const ldapBootstrapMegaDockerDotLdifMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60007,
  miteFile: {
    path: `ldap/ldif-files`,
    name: `51-bootstrap-megadocker`,
    extension: `ldif`,
    permissions: `644`,
    contents: `# MegaDocker 51-bootstrap-megadocker.ldif file for [[MOBNAME]]
# base domain name for ldap was automatically generated from [[PRIMARYDOMAIN]]

version: 1

# Begin Customers Section
    
dn: ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Businesses,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Domestic,ou=Businesses,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=International,ou=Businesses,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Individuals,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Domestic,ou=Individuals,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=International,ou=Individuals,ou=Customers,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Customers Section

# Begin Employees Section

dn: ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Staff,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Managers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Executives,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=InternalUsers,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Moderators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Administrators,ou=Technicians,ou=Employees,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Employees Section

# Begin Users Section

dn: ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=BotUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ExternalUsers,ou=BotUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=InternalUsers,ou=BotUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=ExternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=InternalUsers,ou=HumanUsers,ou=Users,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Users Section

# Begin Vendors Section

# Vendors ou
dn: ou=Vendors,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

## Domestic-Vendors
dn: ou=Domestic,ou=Vendors,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

## International-Vendors
dn: ou=International,ou=Vendors,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

# End Vendors Section


`,
  },
}
