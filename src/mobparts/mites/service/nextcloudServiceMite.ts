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

# Begin NextCloud Service Sections

 nextcloud:
  image: nextcloud
  networks:
   - traefik
   - nextcloud
  volumes:
  - ./logs/nextcloud:/loglocation
  - ./nextcloud/main/:/var/www/html
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.nextcloud.entrypoints=plainhttp'
    - 'traefik.http.services.nextcloud.loadbalancer.server.port=80'
    - 'traefik.http.routers.nextcloud.rule=Host("nextcloud.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.nextcloud-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.nextcloud.middlewares=nextcloud-force-secure'
    - 'traefik.http.routers.nextcloud.service=nextcloud'
    - 'traefik.http.routers.nextcloud-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.nextcloud-https.rule=Host("nextcloud.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.nextcloud-https.service=nextcloud'
    - 'traefik.http.routers.nextcloud-https.tls=true'
    - 'traefik.http.services.nextcloud-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Nextcloud office suite'

 nextcloud-postgres:
  image: postgres:alpine
  environment:
   - POSTGRES_PASSWORD=[[NEXTCLOUDPOSTGRESPASSWORD]]
   - POSTGRES_USER=[[NEXTCLOUDPOSTGRESUSER]]
   - POSTGRES_DB=nextcloud
  networks:
   - nextcloud
  volumes:
  - ./logs/nextcloud:/loglocation
  - ./nextcloud/postgres:/var/lib/postgresql
  deploy:
   restart_policy:
    condition: on-failure

 nextcloud-mariadb:
  image: mariadb
  environment:
   - MYSQL_USER=[[NEXTCLOUDMARIADBUSER]]
   - MYSQL_PASSWORD=[[NEXTCLOUDMARIADBPASSWORD]]
   - MYSQL_ROOT_PASSWORD=[[NEXTCLOUDMARIADBROOTPASSWORD]]
   - MYSQL_DATABASE=nextcloud
  volumes:
  - ./logs/nextcloud:/loglocation
  - ./nextcloud/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: on-failure
  networks:
   - nextcloud

# End NextCloud Service Section

`,
};
