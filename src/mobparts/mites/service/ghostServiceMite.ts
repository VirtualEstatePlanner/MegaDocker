//  ghostServiceMite.ts
//  MegaDocker
//  Service Mite for Ghost
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const ghostServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2004,
  miteString: `

#Begin Ghost Service Section

 ghost:
  image: ghost
  networks:
   - ghost
   - traefik
  environment:
   - database__client=mysql
   - database__connection__host=[[MOBNAME]]_ghost-mariadb
   - database__connection__user=root
   - database__connection__password=[[GHOSTMARIADBROOTPASSWORD]]
   - database__connection__database=mariadb
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.ghost.entrypoints=plainhttp'
    - 'traefik.http.services.ghost.loadbalancer.server.port=80'
    - 'traefik.http.routers.ghost.rule=Host("ghost.[[PRIMARYDOMAIN]]") || Host("ghost.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.middlewares.ghost-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.ghost.middlewares=ghost-force-secure'
    - 'traefik.http.routers.ghost.service=ghost'
    - 'traefik.http.routers.ghost-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.ghost-https.rule=Host("ghost.[[PRIMARYDOMAIN]]") || Host("ghost.[[SECONDARYDOMAIN]]")'
    - 'traefik.http.routers.ghost-https.service=ghost'
    - 'traefik.http.routers.ghost-https.tls=true'
    - 'traefik.http.services.ghost-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Ghost blogging platform'

 ghost-mariadb:
  image: mariadb
  networks:
   - ghost
  volumes:
   - ./ghost/mariadb:/var/lib/mysql
  environment:
   - MYSQL_ROOT_PASSWORD=[[GHOSTMARIADBROOTPASSWORD]]
  deploy:
   restart_policy:
    condition: on-failure

#End Ghost Service Section

`
};
