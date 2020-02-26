//  serviceMite.ts
//  MegaDocker
//  Service Mite for NextCloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const nextcloudServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2008,
  miteString: `

  #Begin Owncloud Service Sections
  
   nextcloud:
    image: nextcloud
    networks:
     - traefik
     - nextcloud
    volumes:
     - ./nextcloud/apps/:/var/www/html/apps
     - ./nextcloud/config/:/var/www/html/config
     - ./nextcloud/data/:/var/www/html/data
    deploy:
     restart_policy:
      condition: on-failure
     labels:
      - "traefik.enable=true"
      - "traefik.backend=owncloud"
      - "traefik.frontend.rule=Host:owncloud.[[PRIMARYDOMAIN]],owncloud.[[SECONDARYDOMAIN]]"
      - "traefik.port=80"
      - "traefik.docker.network=traefik"
    depends_on:
     - postgres
  
     nextcloud-postgres:
    image: postgres:alpine
    environment:
     - POSTGRES_PASSWORD=password
     - POSTGRES_USER=owncloud
     - POSTGRES_DB=owncloud
    networks:
     - owncloud
    volumes:
   #  - /etc/localtime:/etc/localtime:ro
     - ./nextcloud/postgres:/var/lib/postgresql
    deploy:
     restart_policy:
      condition: on-failure
  
      nextcloud-mariadb:
    image: mariadb
    environment:
     - MYSQL_USER=owncloud
     - MYSQL_PASSWORD=owncloud
     - MYSQL_ROOT_PASSWORD=owncloud
     - MYSQL_DATABASE=owncloud
    volumes:
     - ./nextcloud/mariadb:/var/lib/mysql
    deploy:
     restart_policy:
      condition: on-failure
    networks:
     - owncloud
  
  
     nextcloud-redis:
    image: redis
    volumes:
     - ./nextcloud/redis:/var/lib/mysql
    networks:
     - owncloud
    deploy:
     restart_policy:
      condition: on-failure
  
  
  #End Owncloud Service Section
  
  `
};
