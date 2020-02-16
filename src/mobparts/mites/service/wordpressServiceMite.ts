//  wordpressServiceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobName } from '../../memories/mobName';
import { wordpressMariaDBUser } from '../../memories/wordpressMariaDBUser';
import { wordpressMariaDBPassword } from '../../memories/wordpressMariaDBPassword';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';
import { wordpressMariaDBRootPassword } from '../../memories/wordpressMariaDBRootPassword';

export const wordpressServiceMite: IMite = {
  type: 'Service',
  miteIndex: 5,
  miteString: `

  #Begin WordPress Service Section
  
   wordpress:
    image: wordpress
    depends_on:
     - mariadb
    networks:
     - wordpress
     - traefik
    environment:
     - WORDPRESS_DB_HOST=${mobName}_wordpress-mariadb
     - WORDPRESS_DB_USER=${wordpressMariaDBUser.value}
     - WORDPRESS_DB_PASSWORD=${wordpressMariaDBPassword.value}
     - WORDPRESS_DB_NAME=wordpress
    volumes:
     - ${mobFolderPath}/WordPress/data:/var/www/html
    deploy:
     replicas: 1
     restart_policy:
      condition: on-failure
     labels:
      - "traefik.enable=true"
      - "traefik.port=80"
      - "traefik.backend=wordpress"
      - "traefik.frontend.rule=Host:wordpress.${primaryDomain.value},wordpress.${secondaryDomain.value}"
      - "traefik.docker.network=traefik"
      - "com.MegaDocker.description=WordPress - WordPress blogging platform"
  
   wordpress-mariadb:
    image: mariadb
    networks:
     - wordpress
    environment:
     - MYSQL_DATABASE=wordpress
     - MYSQL_ROOT_PASSWORD=${wordpressMariaDBRootPassword.value}
     - MYSQL_USER=${wordpressMariaDBUser.value}
     - MYSQL_PASSWORD=${wordpressMariaDBPassword.value}
    volumes:
     - ${mobFolderPath}/WordPress/mariadb:/var/lib/mysql
    deploy:
     restart_policy:
      condition: on-failure
  
  #End WordPress Service Section
  
  `
};
