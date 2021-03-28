/** @format */

//  ldapServiceMite.ts
//  MEGADocker
//  Service Mite for LDAP
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`ldapadmin`, `authelia`, `ldap`]

export const ldapServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30012,
  webInterfaceHostnames: hostnames,
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
   - \${PWD}/logs/ldap:/var/log/ldap
   - \${PWD}/ldap/ldif-files:/container/service/slapd/assets/config/bootstrap/ldif/custom
   - \${PWD}/ldap/lib:/var/lib/ldap
   - \${PWD}/ldap/slapd.d:/etc/ldap/slapd.d
   - \${PWD}/traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/container/service/slapd/assets/certs/[[PRIMARYDOMAIN]].crt:ro
   - \${PWD}/traefik/ssl/private/[[PRIMARYDOMAIN]].key:/container/service/slapd/assets/certs/[[PRIMARYDOMAIN]].key:ro
  ports:
   - 389:389
   - 636:636
  deploy:
   restart_policy:
    condition: any

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
   - \${PWD}/logs/ldap:/loglocation
   - \${PWD}/traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/container/service/phpldapadmin/assets/apache2/certs/certs/[[PRIMARYDOMAIN]].crt:ro
   - \${PWD}/traefik/ssl/private/[[PRIMARYDOMAIN]].key:/container/service/phpldapadmin/assets/apache2/certs/private/[[PRIMARYDOMAIN]].key:ro
   - \${PWD}/traefik/ssl/private/letsencrypt.key:/container/service/phpldapadmin/assets/apache2/certs/certs/letsencrypt.key:ro
   - \${PWD}/traefik/ssl/certs/[[PRIMARYDOMAIN]].crt:/container/service/ldap-client/assets/certs/[[PRIMARYDOMAIN]].crt:ro
   - \${PWD}/traefik/ssl/private/[[PRIMARYDOMAIN]].key:/container/service/ldap-client/assets/certs/[[PRIMARYDOMAIN]].key:ro
   - \${PWD}/traefik/ssl/private/letsencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key:ro
  networks:
   - ldap
   - traefik
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ldapadmin.entrypoints=plainhttp'
    - 'traefik.http.services.ldapadmin.loadbalancer.server.port=80'
    - 'traefik.http.routers.ldapadmin.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.ldapadmin-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ldapadmin.middlewares=ldapadmin-force-secure'
    - 'traefik.http.routers.ldapadmin.service=ldapadmin'
    - 'traefik.http.routers.ldapadmin-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ldapadmin-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.ldapadmin-https.service=ldapadmin'
    - 'traefik.http.routers.ldapadmin-https.tls=true'
    - 'traefik.http.services.ldapadmin-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=LDAP user authentication server'

 authelia-app:
  image: authelia/authelia
  networks:
   - ldap
   - traefik
  environment:
   - TZ=$HOSTTIMEZONE
  volumes:
   - \${PWD}/ldap/authelia-data:/var/lib/authelia
   - \${PWD}/ldap/authelia-config/configuration.yml:/etc/authelia/configuration.yml:ro
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.authelia.entrypoints=plainhttp'
    - 'traefik.http.services.authelia.loadbalancer.server.port=9091'
    - 'traefik.http.routers.authelia.rule=Host("${hostnames[1]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.authelia-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.authelia.middlewares=ldapadmin-force-secure'
    - 'traefik.http.routers.authelia.service=authelia'
    - 'traefik.http.routers.authelia-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.authelia-https.rule=Host("${hostnames[1]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.authelia-https.service=authelia'
    - 'traefik.http.routers.authelia-https.tls=true'
    - 'traefik.http.services.authelia-https.loadbalancer.server.port=9091'
    - 'com.MegaDocker.description=Authelia - authentication front-end'

 authelia-mariadb:
  image: mariadb
  networks:
   - ldap
  volumes:
   - \${PWD}/ldap/authelia-mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[AUTHELIAMARIADBROOTPASSWORD]]
   - MYSQL_DATABASE=authelia
   - MYSQL_USER=[[AUTHELIAMARIADBUSER]]
   - MYSQL_PASSWORD=[[AUTHELIAMARIADBPASSWORD]]
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'com.MegaDocker.description=Authelia MariaDB - MariaDB database to store Authelia data'
 
 authelia-redis:
  image: redis:alpine
  volumes:
   - \${PWD}/authelia/redis-data:/data
   - \${PWD}/authelia/redis-conf/redis.conf:/usr/local/etc/redis/redis.conf
  networks:
   - ldap
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'com.MegaDocker.description=Authelia Redis DB - Redis database to store Authelia data'

# End LDAP Service Section

`,
}
