//  serviceMite.ts
//  MegaDocker
//  Service Mite for Owncloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const owncloudServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2010,
  miteString: `
 #Begin Owncloud Service Sections

 owncloud:
  image: owncloud:latest
  networks:
   - traefik
   - owncloud
  volumes:
   - ./owncloud/apps/:/var/www/html/apps
   - ./owncloud/config/:/var/www/html/config
   - ./owncloud/data/:/var/www/html/data
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - "traefik.enable=true"
    - "traefik.backend=owncloud"
    - "traefik.frontend.rule=Host:owncloud.[[PRIMARYDOMAIN]],owncloud.[[SECONDARYDOMAIN]]"
    - "traefik.port=80"
    - "traefik.docker.network=[[MOBNAME]]_traefik"
  depends_on:
   - owncloud-postgres

 owncloud-postgres:
  image: postgres:alpine
  environment:
   - POSTGRES_PASSWORD=[[POSTGRESPASSWORD]]
   - POSTGRES_USER=[[POSTGRESUSER]]
   - POSTGRES_DB=owncloud
  networks:
   - [[MOBNAME]]_owncloud
  volumes:
#   - /etc/localtime:/etc/localtime:ro
   - ./owncloud/postgres:/var/lib/postgresql
  deploy:
   restart_policy:
    condition: on-failure

 owncloud-mariadb:
  image: mariadb: latest
  environment:
   - MYSQL_USER=owncloud
   - MYSQL_PASSWORD=owncloud
   - MYSQL_ROOT_PASSWORD=owncloud
   - MYSQL_DATABASE=owncloud
  volumes:
   - ./owncloud/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: on-failure
  networks:
   - [[MOBNAME]]_owncloud

 owncloud-redis:
  image: redis: latest
  volumes:
   - ./owncloud/redis:/var/lib/mysql
  networks:
   - [[MOBNAME]]_owncloud
  deploy:
   restart_policy:
    condition: on-failure

#End Owncloud Service Section

`
};
