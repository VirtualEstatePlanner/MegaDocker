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

#Begin NextCloud Service Sections

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
    - 'traefik.enable=true'
    - 'traefik.http.routers.nextcloud.entrypoints=plainhttp'
    - 'traefik.http.services.nextcloud.loadbalancer.server.port=80'
    - 'traefik.http.routers.nextcloud.rule=Host("nextcloud.[[PRIMARYDOMAIN]]") || Host("nextcloud.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.nextcloud-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.nextcloud.middlewares=nextcloud-force-secure'
    - 'traefik.http.routers.nextcloud.service=nextcloud'
    - 'traefik.http.routers.nextcloud-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.nextcloud-https.rule=Host("nextcloud.[[PRIMARYDOMAIN]]") || Host("nextcloud.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.nextcloud-https.service=nextcloud'
    - 'traefik.http.routers.nextcloud-https.tls=true'
    - 'traefik.http.services.nextcloud-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=DESCRIPTION'
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
  
#End NextCloud Service Section

`
};
