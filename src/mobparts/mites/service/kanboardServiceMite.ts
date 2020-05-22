//  serviceMite.ts
//  MegaDocker
//  Service Mite for Portal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const kanboardServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2013,
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
   - ./logs/kanboard:/loglocation
   - ./kanboard/kanboard-data:/var/www/app/data
   - ./kanboard/kanboard-plugins:/var/www/app/plugins
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.kanboard.entrypoints=plainhttp'
    - 'traefik.http.services.kanboard.loadbalancer.server.port=80'
    - 'traefik.http.routers.kanboard.rule=Host("kanboard.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.kanboard-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.kanboard.middlewares=kanboard-force-secure'
    - 'traefik.http.routers.kanboard.service=kanboard'
    - 'traefik.http.routers.kanboard-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.kanboard-https.rule=Host("kanboard.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.kanboard-https.service=kanboard'
    - 'traefik.http.routers.kanboard-https.tls=true'
    - 'traefik.http.services.kanboard-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Kanboard - an extensible kanban board for task sharing'

 kanboard-mariadb:
  image: mariadb
  networks:
   - kanboard
  volumes:
   - ./logs/kanboard:/loglocation
   - ./kanboard/mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[KANBOARDMARIADBROOTPASSWORD]]
   - MYSQL_DATABASE=kanboard
   - MYSQL_USER=[[KANBOARDMARIADBUSER]]
   - MYSQL_PASSWORD=[[KANBOARDMARIADBPASSWORD]]
  
# End Kanboard Service Section
  
  `,
};
