//  serviceMite.ts
//  MegaDocker
//  Network Mite for $SOMEMANIKIN
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';
import { mobFolderPath } from '../../memories/mobFolderPath';
import { primaryDomain } from '../../memories/primaryDomain';
import { secondaryDomain } from '../../memories/secondaryDomain';

export const nextcloudServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2006,
  miteString: `

  #Begin Owncloud Service Sections
  
   nextcloud:
    image: nextcloud
    networks:
     - traefik
     - nextcloud
    volumes:
     - export/Owncloud/apps/:/var/www/html/apps
     - ${mobFolderPath}/Owncloud/config/:/var/www/html/config
     - ${mobFolderPath}/Owncloud/data/:/var/www/html/data
    deploy:
     restart_policy:
      condition: on-failure
     labels:
      - "traefik.enable=true"
      - "traefik.backend=owncloud"
      - "traefik.frontend.rule=Host:owncloud.${primaryDomain.value},owncloud.${secondaryDomain.value}"
      - "traefik.port=80"
      - "traefik.docker.network=traefik"
    depends_on:
     - postgres
  
   owncloud-postgres:
    image: postgres:alpine
    environment:
     - POSTGRES_PASSWORD=password
     - POSTGRES_USER=owncloud
     - POSTGRES_DB=owncloud
    networks:
     - owncloud
    volumes:
   #  - /etc/localtime:/etc/localtime:ro
     - ${mobFolderPath}/Owncloud/postgres:/var/lib/postgresql
    deploy:
     restart_policy:
      condition: on-failure
  
   owncloud-mariadb:
    image: mariadb
    environment:
     - MYSQL_USER=owncloud
     - MYSQL_PASSWORD=owncloud
     - MYSQL_ROOT_PASSWORD=owncloud
     - MYSQL_DATABASE=owncloud
    volumes:
     - ${mobFolderPath}/Owncloud/mariadb:/var/lib/mysql
    deploy:
     restart_policy:
      condition: on-failure
    networks:
     - owncloud
  
  
   owncloud-redis:
    image: redis
    volumes:
     - ${mobFolderPath}/Owncloud/redis:/var/lib/mysql
    networks:
     - owncloud
    deploy:
     restart_policy:
      condition: on-failure
  
  
  #End Owncloud Service Section
  
  `
};
