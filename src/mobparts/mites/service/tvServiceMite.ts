/** @format */

//  tvServiceMite.ts
//  MEGADocker
//  Network Mite for sonarr
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`tv`]

export const tvServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30031,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin TV Service Section

 tv:
  image: linuxserver/sonarr:latest
  networks:
   - traefik
   - tv
  volumes:
   - \${PWD}/media/tv-config:/config
   - \${PWD}/media/tv-data:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.tv.entrypoints=plainhttp'
    - 'traefik.http.services.tv.loadbalancer.server.port=8989'
    - 'traefik.http.routers.tv.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.tv-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.tv.middlewares=tv-force-secure'
    - 'traefik.http.routers.tv.service=tv'
    - 'traefik.http.routers.tv-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.tv-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.tv-https.service=tv'
    - 'traefik.http.routers.tv-https.tls=true'
    - 'traefik.http.services.tv-https.loadbalancer.server.port=8989'
    - 'com.MegaDocker.description=Sonarr - a tv episode search tool'

# End TV Service Section

`,
}
