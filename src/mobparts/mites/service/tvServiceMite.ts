/** @format */

//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

export const tvServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30030,
  webInterfaceHostnames: [`tv`],
  miteString: `

# Begin TV Service Section

 tv:
  image: linuxserver/sonarr:latest
  networks:
   - traefik
   - tv
  volumes:
   - ./media/tv-config:/config
   - ./media/tv-data:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.tv.entrypoints=plainhttp'
     - 'traefik.http.services.tv.loadbalancer.server.port=8989'
    - 'traefik.http.routers.tv.rule=Host("tv.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.tv-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.tv.middlewares=tv-force-secure'
    - 'traefik.http.routers.tv.service=tv'
    - 'traefik.http.routers.tv-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.tv-https.rule=Host("tv.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.tv-https.service=tv'
    - 'traefik.http.routers.tv-https.tls=true'
    - 'traefik.http.services.tv-https.loadbalancer.server.port=8989'
    - 'com.MegaDocker.description=Sonarr - a tv episode search tool'

# End TV Service Section
   


`,
}
