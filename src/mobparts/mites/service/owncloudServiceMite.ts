/** @format */

//  serviceMite.ts
//  MegaDocker
//  Service Mite for Owncloud
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`owncloud`]

export const owncloudServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30021,
  webInterfaceHostnames: hostnames,
  miteString: `
# Begin Owncloud Service Sections

 owncloud:
  image: owncloud:latest
  networks:
   - traefik
   - owncloud
  volumes:
   - \${PWD}/owncloud/apps/:/var/www/html/apps
   - \${PWD}/owncloud/config/:/var/www/html/config
   - \${PWD}/owncloud/data/:/var/www/html/data
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.owncloud.entrypoints=plainhttp'
    - 'traefik.http.services.owncloud.loadbalancer.server.port=80'
    - 'traefik.http.routers.owncloud.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.owncloud-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.owncloud.middlewares=owncloud-force-secure'
    - 'traefik.http.routers.owncloud.service=owncloud'
    - 'traefik.http.routers.owncloud-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.owncloud-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.owncloud-https.service=owncloud'
    - 'traefik.http.routers.owncloud-https.tls=true'
    - 'traefik.http.services.owncloud-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=DESCRIPTION'
   placement:
    constraints:
     - node.role == manager
  depends_on:
   - owncloud-postgres

 owncloud-postgres:
  image: postgres:alpine
  environment:
   - POSTGRES_PASSWORD=[[POSTGRESPASSWORD]]
   - POSTGRES_USER=[[POSTGRESUSER]]
   - POSTGRES_DB=owncloud
  networks:
   - owncloud
  volumes:
## TODO: implement fix for /etc/localtime on macOS
#   - /etc/localtime:/etc/localtime:ro
   - \${PWD}/owncloud/postgres:/var/lib/postgresql
  deploy:
   restart_policy:
    condition: any

 owncloud-mariadb:
  image: mariadb
  environment:
   - MYSQL_USER=owncloud
   - MYSQL_PASSWORD=owncloud
   - MYSQL_ROOT_PASSWORD=owncloud
   - MYSQL_DATABASE=owncloud
  volumes:
   - \${PWD}/owncloud/mariadb:/var/lib/mysql
  deploy:
   restart_policy:
    condition: any
  networks:
   - owncloud

owncloud-redis:
  image: redis
  volumes:
   - \${PWD}/owncloud/redis:/var/lib/mysql
  networks:
   - owncloud
  deploy:
   restart_policy:
    condition: any

# End Owncloud Service Section

`,
}
