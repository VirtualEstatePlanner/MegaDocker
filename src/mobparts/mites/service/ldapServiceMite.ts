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

# Begin LDAP Service Section

 ldap:
  image: osixia/openldap
  command:  --copy-service
  networks:
   - ldap
  environment:
   - LDAP_BACKEND=mdb
   - LDAP_DOMAIN=[[PRIMARYDOMAIN]]
   - LDAP_ORGANISATION=[[LDAPORGANISATION]]
   - LDAP_ADMIN_PASSWORD=[[LDAPADMINPASSWORD]]
   - LDAP_CONFIG_PASSWORD=[[LDAPCONFIGURATIONPASSWORD]]
   - LDAP_TLS_CIPHER_SUITE=NORMAL
   - LDAP_TLS_VERIFY_CLIENT=allow
   - LDAP_TLS=true
   - LDAP_TLS_CRT_FILENAME=[[PRIMARYDOMAIN]].crt
   - LDAP_TLS_KEY_FILENAME=[[PRIMARYDOMAIN]].key
   - LDAP_TLS_CA_CRT_FILENAME=[[PRIMARYDOMAIN]].crt
  tty: true
  stdin_open: true
  volumes:
   - ./logs/ldap:/var/log/ldap
   - ./ldap/ldif-files:/container/service/slapd/assets/config/bootstrap/ldif/custom
   - ./ldap/lib:/var/lib/ldap
   - ./ldap/slapd.d:/etc/ldap/slapd.d
   - ./traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/container/service/slapd/assets/certs/[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/ssl/private/[[PRIMARYDOMAIN]].key:/container/service/slapd/assets/certs/[[PRIMARYDOMAIN]].key:ro
  ports:
   - 389:389
   - 636:636

 ldapadmin:
  image: osixia/phpldapadmin:latest
  command: --copy-service
  environment:
   - SERVER_NAME=[[MOBNAME]]_ldap
   - PHPLDAPADMIN_LDAP_HOSTS=[[MOBNAME]]_ldap
   - PHPLDAPADMIN_TRUST_PROXY_SSL=true
   - PHPLDAPADMIN_HTTPS=false
   - PHPLDAPADMIN_SERVER_ADMIN=[[LETSENCRYPTEMAIL]]
   - PHPLDAPADMIN_HTTPS_CRT_FILENAME=certs/[[PRIMARYDOMAIN]].crt
   - PHPLDAPADMIN_HTTPS_KEY_FILENAME=private/[[PRIMARYDOMAIN]].key
   - PHPLDAPADMIN_HTTPS_CA_CRT_FILENAME=certs/[[PRIMARYDOMAIN]].crt
  volumes:
   - ./logs/ldap:/loglocation
   - ./traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/container/service/phpldapadmin/assets/apache2/certs/certs/[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/ssl/private/[[PRIMARYDOMAIN]].key:/container/service/phpldapadmin/assets/apache2/certs/private/[[PRIMARYDOMAIN]].key:ro
   - ./traefik/ssl/private/letsencrypt.key:/container/service/phpldapadmin/assets/apache2/certs/certs/letsencrypt.key:ro
   - ./traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/container/service/ldap-client/assets/certs/[[PRIMARYDOMAIN]].crt:ro
   - ./traefik/ssl/private/[[PRIMARYDOMAIN]].key:/container/service/ldap-client/assets/certs/[[PRIMARYDOMAIN]].key:ro
   - ./traefik/ssl/private/letsencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key:ro
  networks:
   - ldap
   - traefik
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ldapadmin.entrypoints=plainhttp'
    - 'traefik.http.services.ldapadmin.loadbalancer.server.port=80'
    - 'traefik.http.routers.ldapadmin.rule=Host("ldapadmin.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.ldapadmin-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ldapadmin.middlewares=ldapadmin-force-secure'
    - 'traefik.http.routers.ldapadmin.service=ldapadmin'
    - 'traefik.http.routers.ldapadmin-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ldapadmin-https.rule=Host("ldapadmin.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.ldapadmin-https.service=ldapadmin'
    - 'traefik.http.routers.ldapadmin-https.tls=true'
    - 'traefik.http.services.ldapadmin-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=LDAP user authentication server'

# End LDAP Service Section

`,
};
