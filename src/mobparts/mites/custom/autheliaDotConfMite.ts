/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const autheliaDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60000,
  miteFile: {
    path: `ldap/authelia-conf`,
    name: `authelia`,
    extension: `conf`,
    permissions: `644`,
    contents: `# MegaDocker authelia.conf file for [[MOBNAME]]
host: 0.0.0.0
port: 9091
log_level: debug
default_redirection_url: https://authelia.[[PRIMARYDOMAIN]]/

totp:
 issuer: [[PRIMARYDOMAIN]]

 authentication_backend:
 ldap:
  url: ldaps://[[MOBNAME]]_ldap
  skip_verify: false
  base_dn: dc=ldap,[[LDAPDOMAINASDCS]]
  username_attribute: uid
  additional_users_dn: ou=users
  users_filter: (&({username_attribute}={input})(objectClass=person))
  additional_groups_dn: ou=groups
  groups_filter: (&(member={dn})(objectclass=groupOfNames))
  group_name_attribute: cn
  mail_attribute: mail
  user: cn=[[LDAPADMINUSER]],dc=ldap,[[LDAPDOMAINASDCS]]
  password: [[LDAPADMINPASSWORD]]

notifier:
 smtp:
  username: [[LDAPMAILUSERNAME]]
  sender: [[LDAPMAILUSERNAME]]@[[LDAPMAILDOMAIN]]
  password: [[LDAPSMTPASSWORD]]
  host: [[LDAPSMTPHOST]]
  port: 587

jwt_secret: [[LDAPJWTSECRET]]

access_control:
 default_policy: deny
 rules:
  - domain: "*.[[PRIMARYDOMAIN]]"
    policy: one_factor

session:
 name: authelia_session
 secret: [[LDAPAUTHELIASESSIONSECRET]]
 expiration: 3600
 inactivity: 300
 domain: [[PRIMARYDOMAIN]]

regulation:
 max_retries: 3
 find_time: 90
 ban_time: 300
    
storage:
 mysql:
  host: [[MOBNAME]]_authelia-mariadb
  port: 3306
  database: authelia
  username: [[LDAPADMINUSER]]
  password: [[LDAPADMINPASSWORD]]

        `,
  },
}
