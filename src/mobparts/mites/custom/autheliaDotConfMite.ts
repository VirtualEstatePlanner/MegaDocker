/** @format */

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

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
  base_dn: [[LDAPDOMAINASDCS]]
  username_attribute: uid
  additional_users_dn: ou=Users
  users_filter: (&({username_attribute}={input})(objectClass=person))
  additional_groups_dn: ou=Groups
  groups_filter: (&(member={dn})(objectclass=groupOfNames))
  group_name_attribute: cn
  mail_attribute: mail
  user: cn=[[LDAPADMINUSER]],[[LDAPDOMAINASDCS]]
  password: [[LDAPADMINPASSWORD]]

 notifier:
  disable_startup_check: true
  filesystem:
   filename: /config/notification.txt
 
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

redis:
 host: [[MOBNAME]]_authelia-redis
 port: 6379
 username: [[LDAPADMINUSER]]
 password: [[LDAPADMINPASSWORD]]
 database_index: 0
 maximum_active_connections: 8
 minimum_idle_connections: 0
 tls:
  server_name: myredis.example.com
  skip_verify: false
`
  }
}
