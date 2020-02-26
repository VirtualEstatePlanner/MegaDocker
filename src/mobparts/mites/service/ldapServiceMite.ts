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

  #Begin LDAP Service Sections
  
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
     labels:
      - "traefik.enable=true"
      - "traefik.docker.network=traefik"
      - "traefik.port=80"
      - "traefik.backend=ldap-admin"
      - "traefik.frontend.rule=Host:ldap-admin.[[PRIMARYDOMAIN]],ldap-admin.[[SECONDARYDOMAIN]]"
      - "com.MegaDocker.description=PHPLDAPAdmin - a web front-end for OpenLDAP."
  
  #End LDAP Service Section
  
  `
};
