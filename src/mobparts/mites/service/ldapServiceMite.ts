//  ldapServiceMite.ts
//  MegaDocker
//  Network Mite for LDAP
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ldapServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2006,
  miteString: `

#Begin LDAP Service Section

 ldap:
  image: osixia/openldap
  command:  --copy-service --loglevel debug
  networks:
   - ldap
  environment:
   - LDAP_TLS=true
   - LDAP_TLS_CRT_FILENAME=[[PRIMARYDOMAIN]].crt
   - LDAP_TLS_KEY_FILENAME=[[PRIMARYDOMAIN]].key
   - LDAP_TLS_CA_CRT_FILENAME=letssencrypt.key
   - LDAP_ORGANISATION=The MegaDocker Group
# TODO: add [[LDAPORGANIZATION]] Memory
#   - LDAP_ORGANISATION=[[LDAPORGANIZATION]]
   - LDAP_DOMAIN=ldap.[[PRIMARYDOMAIN]]
# TODO: add [[PRIMARYDOMAIN and split into 2 dcs]] 
#   - LDAP_BASE_DN=dc=ldap,dc=[[PRIMARYDOMAIN domain]],dc=[[PRIMARYDOMAIN tld]]
   - LDAP_BASE_DN=dc=ldap,dc=megadocker,dc=net
   - LDAP_ADMIN_PASSWORD=[[LDAPADMINPASSWORD]]
   - LDAP_CONFIG_PASSWORD=[[LDAPCONFIGURATIONPASSWORD]]
   - LDAP_TLS_CIPHER_SUITE=NORMAL
   - LDAP_TLS_VERIFY_CLIENT=allow
  tty: true
  stdin_open: true
  volumes:
   - ./logs/ldap:/loglocation
   - ./ldap/ldif-files:/ldif
   - ./ldap/lib:/var/lib/ldap
   - ./ldap/slapd.d:/etc/ldap/slapd.d
   - ./traefik/certs/certs/[[PRIMARYDOMAIN]].crt:/container/service/slapd/assets/certs/[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/certs/private/[[PRIMARYDOMAIN]].key:/container/service/slapd/assets/certs/[[PRIMARYDOMAIN]].key:ro
   - ./traefik/certs/private/letsencrypt.key:/container/service/slapd/assets/certs/letsencrypt.key:ro
  ports:
   - 389:389
   - 636:636
   - 6443:443
  hostname: ldap.[[PRIMARYDOMAIN]]

 ldapadmin:
  image: osixia/phpldapadmin:latest
  environment:
   - SERVER_NAME=[[MOBNAME]]_ldap
   - PHPLDAPADMIN_LDAP_HOSTS=[[MOBNAME]]_ldap
   - PHPLDAPADMIN_TRUST_PROXY_SSL=true
   - PHPLDAPADMIN_HTTPS=false
   - PHPLDAPADMIN_SERVER_ADMIN=[[LETSENCRYPTEMAIL]]
   - PHPLDAPADMIN_HTTPS_CRT_FILENAME=certs/[[PRIMARYDOMAIN]].crt
   - PHPLDAPADMIN_HTTPS_KEY_FILENAME=private/[[PRIMARYDOMAIN]].key
   - PHPLDAPADMIN_HTTPS_CA_CRT_FILENAME=private/letsencrypt.key
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_CA_CRT_FILENAME=[[PRIMARYDOMAIN]].crt
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_CRT_FILENAME=[[PRIMARYDOMAIN]].key
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_KEY_FILENAME=letsencrypt.key
#  hostname: ldapadmin.[[PRIMARYDOMAIN]]
  volumes:
   - ./logs/ldap:/loglocation
   - ./traefik/certs/certs/[[PRIMARYDOMAIN]].crt:/container/service/phpldapadmin/assets/apache2/certs/certs/[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/certs/private/[[PRIMARYDOMAIN]].key:/container/service/phpldapadmin/assets/apache2/certs/private/[[PRIMARYDOMAIN]].key:ro
   - ./traefik/certs/private/letsencrypt.key:/container/service/phpldapadmin/assets/apache2/certs/certs/letsencrypt.key:ro
   - ./traefik/certs/certs/[[PRIMARYDOMAIN]].crt:/container/service/ldap-client/assets/certs/[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/certs/private/[[PRIMARYDOMAIN]].key:/container/service/ldap-client/assets/certs/[[PRIMARYDOMAIN]].key:ro
   - ./traefik/certs/private/letsencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key:ro
  networks:
   - ldap
   - traefik
  depends_on:
   - ldap
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ldapadmin.entrypoints=plainhttp'
    - 'traefik.http.services.ldapadmin.loadbalancer.server.port=80'
    - 'traefik.http.routers.ldapadmin.rule=Host("ldapadmin.[[PRIMARYDOMAIN]]") || Host("ldapadmin.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.ldapadmin-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ldapadmin.middlewares=rocketchat-force-secure'
    - 'traefik.http.routers.ldapadmin.service=rocketchat'
    - 'traefik.http.routers.ldapadmin-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ldapadmin-https.rule=Host("ldapadmin.[[PRIMARYDOMAIN]]") || Host("ldapadmin.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.ldapadmin-https.service=rocketchat'
    - 'traefik.http.routers.ldapadmin-https.tls=true'
    - 'traefik.http.services.ldapadmin-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=LDAP user authentication server'

  #End LDAP Service Section
  
  `
};
