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

 openldap:
  image: osixia/openldap
  command:  --copy-service --loglevel debug
  networks:
   - ldap
  environment:
   - LDAP_TLS=true
   - LDAP_TLS_CRT_FILENAME=*.[[PRIMARYDOMAIN]].crt
   - LDAP_TLS_KEY_FILENAME=*.[[PRIMARYDOMAIN]].key
   - LDAP_TLS_CA_CRT_FILENAME=letssencrypt.key
   - LDAP_ORGANISATION=[[LDAPORGANIZATION]]
   - LDAP_DOMAIN=ldap.[[PRIMARYDOMAIN]]
   - LDAP_BASE_DN=dc=ldap,dc=megadocker,dc=com
   - LDAP_ADMIN_PASSWORD=[[LDAPADMINPASSWORD]]
   - LDAP_CONFIG_PASSWORD=[[LDAPCONFIGPASSWORD]]
   - LDAP_TLS_CIPHER_SUITE=NORMAL
   - LDAP_TLS_VERIFY_CLIENT=allow
  tty: true
  stdin_open: true
  volumes:
   - ./ldap/ldif-files:/ldif
   - ./ldap/lib:/var/lib/ldap
   - ./ldap/slapd.d:/etc/ldap/slapd.d
   - ./traefik/ssl/certs/*.[[PRIMARYDOMAIN]].crt:/container/service/slapd/assets/certs/*.[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/ssl/private/*.[[PRIMARYDOMAIN]].key:/container/service/slapd/assets/certs/*.[[PRIMARYDOMAIN]].key:ro
   - ./traefik/ssl/private/letssencrypt.key:/container/service/slapd/assets/certs/letsencrypt.key:ro
  ports:
   - 389:389
   - 636:636
   - 6443:443
  hostname: ldap.[[PRIMARYDOMAIN]]

 ldapadmin:
  image: osixia/phpldapadmin:latest
  environment:
   - SERVER_NAME=[[MOBNAME]]_openldap
   - PHPLDAPADMIN_LDAP_HOSTS=[[MOBNAME]]_openldap
   - PHPLDAPADMIN_TRUST_PROXY_SSL=true
   - PHPLDAPADMIN_HTTPS=false
   - PHPLDAPADMIN_SERVER_ADMIN=[[LETSENCRYPTEMAIL]]
   - PHPLDAPADMIN_HTTPS_CRT_FILENAME=certs/*.[[PRIMARYDOMAIN]].crt
   - PHPLDAPADMIN_HTTPS_KEY_FILENAME=private/*.[[PRIMARYDOMAIN]].key
   - PHPLDAPADMIN_HTTPS_CA_CRT_FILENAME=private/letsencrypt.key
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_CA_CRT_FILENAME=*.[[PRIMARYDOMAIN]].crt
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_CRT_FILENAME=*.[[PRIMARYDOMAIN]].key
   - PHPLDAPADMIN_LDAP_CLIENT_TLS_KEY_FILENAME=letsencrypt.key
  hostname: ldap-admin.[[PRIMARYDOMAIN]]
  volumes:
   - ./traefik/ssl/certs/*.[[PRIMARYDOMAIN]].crt:/container/service/phpldapadmin/assets/apache2/certs/certs/*.[[PRIMARYDOMAIN]].crt
   - ./traefik/ssl/private/*.[[PRIMARYDOMAIN]].key:/container/service/phpldapadmin/assets/apache2/certs/private/*.[[PRIMARYDOMAIN]].key
   - ./traefik/ssl/private/letsencrypt.key:/container/service/phpldapadmin/assets/apache2/certs/certs/letsencrypt.key
   - ./traefik/ssl/certs/*.[[PRIMARYDOMAIN]].crt:/container/service/ldap-client/assets/certs/*.[[PRIMARYDOMAIN]].crt
   - ./traefik/ssl/private/*.[[PRIMARYDOMAIN]].key:/container/service/ldap-client/assets/certs/*.[[PRIMARYDOMAIN]].key
   - ./traefik/ssl/private/letssencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key
  networks:
   - ldap
   - traefik
  depends_on:
   - openldap
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ldapadmin.entrypoints=plainhttp'
    - 'traefik.http.services.ldapadmin.loadbalancer.server.port=80'
    - 'traefik.http.routers.ldapadmin.rule=Host("ldapadmin.megadocker.net") || Host("ldapadmin.megadocker.indfo")'
    - 'traefik.http.middlewares.ldapadmin-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ldapadmin.middlewares=rocketchat-force-secure'
    - 'traefik.http.routers.ldapadmin.service=rocketchat'
    - 'traefik.http.routers.ldapadmin-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ldapadmin-https.rule=Host("ldapadmin.megadocker.net") || Host("ldapadmin.megadocker.indfo")'
    - 'traefik.http.routers.ldapadmin-https.service=rocketchat'
    - 'traefik.http.routers.ldapadmin-https.tls=true'
    - 'traefik.http.services.ldapadmin-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=LDAP user authentication server'

  #End LDAP Service Section
  
  `
};
