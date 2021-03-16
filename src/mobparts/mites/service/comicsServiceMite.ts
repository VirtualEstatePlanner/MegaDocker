/** @format */

//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`comics`]

export const comicsServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30001,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Comics Service Section

 comics:
  image: linuxserver/mylar:latest
  networks:
   - comics
   - traefik
  volumes:
   - \${PWD}/media/comics-config:/config
   - \${PWD}/media/comics-data:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.comics.entrypoints=plainhttp'
    - 'traefik.http.services.comics.loadbalancer.server.port=8090'
    - 'traefik.http.routers.comics.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.comics-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.comics.middlewares=comics-force-secure'
    - 'traefik.http.routers.comics.service=comics'
    - 'traefik.http.routers.comics-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.comics-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.comics-https.service=comics'
    - 'traefik.http.routers.comics-https.tls=true'
    - 'traefik.http.services.comics-https.loadbalancer.server.port=8090'
    - 'com.MegaDocker.description=Mylar - a comics search tool'

# End Comics Service Section

`,
}
