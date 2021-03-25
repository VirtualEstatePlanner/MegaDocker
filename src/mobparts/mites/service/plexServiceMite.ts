/** @format */

//  drupalServiceMite.ts
//  MEGADocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`plex`]

export const plexServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30024,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Plex Service Section

 plex:
  image: plexinc/pms-docker
  networks:
   - traefik
  ports:
   - 32469:32469
   - 32400:32400
   - 32401:32401
   - 3005:3005
   - 8324:8324
   - 1900:1900/udp
   - 32410:32410/udp
   - 32412:32412/udp
   - 32413:32413/udp
   - 32414:32414/udp
  volumes:
   - \${PWD}/media/plex-config:/config
   - \${PWD}/media/content
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.plex.entrypoints=plainhttp'
    - 'traefik.http.services.plex.loadbalancer.server.port=32400'
    - 'traefik.http.routers.plex.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.plex-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.plex.middlewares=plex-force-secure'
    - 'traefik.http.routers.plex.service=plex'
    - 'traefik.http.routers.plex-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.plex-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.plex-https.service=plex'
    - 'traefik.http.routers.plex-https.tls=true'
    - 'traefik.http.services.plex-https.loadbalancer.server.port=32400'
    - 'com.MegaDocker.description=Plex - media streaming server'
   placement:
    constraints:
     - node.role == manager

# End Plex Service Section

`,
}
