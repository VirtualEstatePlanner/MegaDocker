/** @format */

//  drupalServiceMite.ts
//  MEGADocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`music`]

export const musicServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30017,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Music Service Section

 music:
  image: linuxserver/lidarr
  networks:
   - movies
   - traefik
  volumes:
   - \${PWD}/media/music-config:/config
   - \${PWD}/media/music-data:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.music.entrypoints=plainhttp'
    - 'traefik.http.services.music.loadbalancer.server.port=8686'
    - 'traefik.http.routers.music.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.music-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.music.middlewares=music-force-secure'
    - 'traefik.http.routers.music.service=music'
    - 'traefik.http.routers.music-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.music-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.music-https.service=music'
    - 'traefik.http.routers.music-https.tls=true'
    - 'traefik.http.services.music-https.loadbalancer.server.port=8686'
    - 'com.MegaDocker.description=Lidarr - a music search tool'

# End Music Service Section

`,
}
