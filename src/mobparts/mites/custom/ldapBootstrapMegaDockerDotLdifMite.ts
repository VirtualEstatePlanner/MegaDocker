import { ICustomMite } from '../../../interfaces/ICustomMite';

export const ldapBootstrapMegaDockerDotLdifMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3004,
  miteFile: {
    path: `ldap/ldif-files`,
    name: `51-bootstrap-megadocker`,
    extension: `ldif`,
    permissions: `644`,
    contents: `# MegaDocker 51-bootstrap-megadocker.ldif file for [[MOBNAME]]
# base domain name for ldap was automatically generated from [[PRIMARYDOMAIN]]

version: 1
    
dn: ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Customers,ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Technicians,ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Vendors,ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Employees,ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Managers,ou=Employees,ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=Users,ou=People,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=TraefikUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GitlabUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SwarmpitUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=SkoposUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KanboardUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=KibanaUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=DrupalUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=GhostUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=WordpressUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PiholeUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=EmailUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=RocketchatUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=PortainerUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=NextcloudUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=OwncloudUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit

dn: ou=HeimdallUsers,ou=UserGroups,[[LDAPDOMAINASDCS]]
objectclass: organizationalUnit
`
  }
};
