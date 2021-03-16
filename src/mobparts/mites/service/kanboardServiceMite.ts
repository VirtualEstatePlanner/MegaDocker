/** @format */

//  serviceMite.ts
//  MegaDocker
//  Service Mite for Portal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`kanboard`]

export const kanboardServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30010,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Kanboard Service Section

 kanboard-app:
  image: kanboard/kanboard
  networks:
   - traefik
   - kanboard
  environment:
   - DATABASE_URL=mysql://[[KANBOARDMARIADBUSER]]:[[KANBOARDMARIADBPASSWORD]]@[[MOBNAME]]_kanboard-mariadb/kanboard
  volumes:
   - \${PWD}/logs/kanboard:/loglocation
   - \${PWD}/kanboard/kanboard-data:/var/www/app/data
   - \${PWD}/kanboard/kanboard-plugins:/var/www/app/plugins
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.kanboard.entrypoints=plainhttp'
    - 'traefik.http.services.kanboard.loadbalancer.server.port=80'
    - 'traefik.http.routers.kanboard.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.kanboard-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.kanboard.middlewares=kanboard-force-secure'
    - 'traefik.http.routers.kanboard.service=kanboard'
    - 'traefik.http.routers.kanboard-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.kanboard-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.kanboard-https.service=kanboard'
    - 'traefik.http.routers.kanboard-https.tls=true'
    - 'traefik.http.services.kanboard-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Kanboard - an extensible kanban board for task sharing'

 kanboard-mariadb:
  image: mariadb
  networks:
   - kanboard
  volumes:
   - \${PWD}/logs/kanboard:/loglocation
   - \${PWD}/kanboard/mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[KANBOARDMARIADBROOTPASSWORD]]
   - MYSQL_DATABASE=kanboard
   - MYSQL_USER=[[KANBOARDMARIADBUSER]]
   - MYSQL_PASSWORD=[[KANBOARDMARIADBPASSWORD]]
  
# End Kanboard Service Section
  
  `,
}
