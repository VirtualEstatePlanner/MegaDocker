/** @format */

//  ghostServiceMite.ts
//  MEGADocker
//  Service Mite for Ghost
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`ghost`]

export const ghostServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30007,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Ghost Service Section

 ghost:
  image: ghost
  networks:
   - ghost
   - traefik
  volumes:
   - \${PWD}/logs/ghost:/loglocation
  environment:
   - database__client=mysql
   - database__connection__host=[[MOBNAME]]_ghost-mariadb
   - database__connection__user=root
   - database__connection__password=[[GHOSTMARIADBROOTPASSWORD]]
   - database__connection__database=[[MOBNAME]]_ghost-mariadb
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ghost.entrypoints=plainhttp'
    - 'traefik.http.services.ghost.loadbalancer.server.port=2368'
    - 'traefik.http.routers.ghost.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.ghost-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ghost.middlewares=ghost-force-secure'
    - 'traefik.http.routers.ghost.service=ghost'
    - 'traefik.http.routers.ghost-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ghost-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.ghost-https.service=ghost'
    - 'traefik.http.routers.ghost-https.tls=true'
    - 'traefik.http.services.ghost-https.loadbalancer.server.port=2368'
    - 'com.MegaDocker.description=Ghost blogging platform'

 ghost-mariadb:
  image: mariadb
  networks:
   - ghost
  volumes:
   - \${PWD}/logs/ghost:/loglocation
   - \${PWD}/ghost/mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[GHOSTMARIADBROOTPASSWORD]]
  deploy:
   restart_policy:
    condition: any

# End Ghost Service Section

`,
}
