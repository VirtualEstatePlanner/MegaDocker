//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { primaryDomain } from '../../memories/primaryDomain';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { mobName } from '../../memories/mobName';
import { letsEncryptEmail } from '../../memories/letsEncryptEmail';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const ldapServiceMite: IMite = {
  type: 'Service',
  miteIndex: 998,
  miteString: `

  #Begin LDAP Service Sections
  
   openldap:
    image: osixia/openldap
    command:  --copy-service --loglevel debug
    networks:
     - ldap
    environment:
     - LDAP_TLS=true
     - LDAP_TLS_CRT_FILENAME=*.${primaryDomain.value}.crt
     - LDAP_TLS_KEY_FILENAME=*.${primaryDomain.value}.key
     - LDAP_TLS_CA_CRT_FILENAME=letssencrypt.key
     - LDAP_ORGANISATION=The MegaDocker Group
     - LDAP_DOMAIN=ldap.${primaryDomain.value}
     - LDAP_BASE_DN=dc=ldap,dc=megadocker,dc=com
     - LDAP_ADMIN_PASSWORD=verysecret
     - LDAP_CONFIG_PASSWORD=verysecret
     - LDAP_TLS_CIPHER_SUITE=NORMAL
     - LDAP_TLS_VERIFY_CLIENT=allow
    tty: true
    stdin_open: true
    volumes:
     - ${mobFolderPath}/LDAP/ldif-files:/ldif
     - ${mobFolderPath}/LDAP/lib:/var/lib/ldap
     - ${mobFolderPath}/LDAP/slapd.d:/etc/ldap/slapd.d
     - ${mobFolderPath}/Traefik/ssl/certs/*.${primaryDomain}.crt:/container/service/slapd/assets/certs/*.${primaryDomain.value}.crt
     - ${mobFolderPath}/Traefik/ssl/private/*.${primaryDomain}.key:/container/service/slapd/assets/certs/*.${primaryDomain.value}.key
     - ${mobFolderPath}/Traefik/ssl/private/letssencrypt.key:/container/service/slapd/assets/certs/letsencrypt.key
    ports:
     - 389:389
     - 636:636
     - 6443:443
    hostname: ldap.${primaryDomain.value}
  
   ldapadmin:
    image: osixia/phpldapadmin:latest
    environment:
     - SERVER_NAME=${mobName}_openldap
     - PHPLDAPADMIN_LDAP_HOSTS=${mobName}_openldap
     - PHPLDAPADMIN_TRUST_PROXY_SSL=true
     - PHPLDAPADMIN_HTTPS=false
     - PHPLDAPADMIN_SERVER_ADMIN=${letsEncryptEmail.value}
     - PHPLDAPADMIN_HTTPS_CRT_FILENAME=certs/*.${primaryDomain.value}.crt
     - PHPLDAPADMIN_HTTPS_KEY_FILENAME=private/*.${primaryDomain.value}.key
     - PHPLDAPADMIN_HTTPS_CA_CRT_FILENAME=private/letsencrypt.key
     - PHPLDAPADMIN_LDAP_CLIENT_TLS_CA_CRT_FILENAME=*.${primaryDomain.value}.crt
     - PHPLDAPADMIN_LDAP_CLIENT_TLS_CRT_FILENAME=*.${primaryDomain.value}.key
     - PHPLDAPADMIN_LDAP_CLIENT_TLS_KEY_FILENAME=letsencrypt.key
    hostname: ldap-admin.${primaryDomain.value}
    volumes:
     - ${mobFolderPath}/Traefik/ssl/certs/*.${primaryDomain.value}.crt:/container/service/phpldapadmin/assets/apache2/certs/certs/*.${primaryDomain.value}.crt
     - ${mobFolderPath}/Traefik/ssl/private/*.${primaryDomain.value}.key:/container/service/phpldapadmin/assets/apache2/certs/private/*.${primaryDomain.value}.key
     - ${mobFolderPath}/Traefik/ssl/private/letsencrypt.key:/container/service/phpldapadmin/assets/apache2/certs/certs/letsencrypt.key
     - ${mobFolderPath}/Traefik/ssl/certs/*.${primaryDomain.value}.crt:/container/service/ldap-client/assets/certs/*.${primaryDomain.value}.crt
     - ${mobFolderPath}/Traefik/ssl/private/*.${primaryDomain.value}.key:/container/service/ldap-client/assets/certs/*.${primaryDomain.value}.key
     - ${mobFolderPath}/Traefik/ssl/private/letssencrypt.key:/container/service/ldap-client/assets/certs/letsencrypt.key
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
      - "traefik.frontend.rule=Host:ldap-admin.${primaryDomain.value},ldap-admin.${secondaryDomain.value}"
      - "com.MegaDocker.description=PHPLDAPAdmin - a web front-end for OpenLDAP."
  
  #End LDAP Service Section
  
  `
};
