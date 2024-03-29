/** @format */

//  moviesServiceMite.ts
//  MEGADocker
//  Service Mite for radarr
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'

const hostnames: string[] = [`movies`]

export const moviesServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30016,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin Movie Service Section

 movies:
  image: linuxserver/radarr:latest
  networks:
   - movies
   - traefik
  volumes:
   - \${PWD}/media/movies-config:/config
   - \${PWD}/media/content:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.movies.entrypoints=plainhttp'
    - 'traefik.http.services.movies.loadbalancer.server.port=80'
    - 'traefik.http.routers.movies.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.movies-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.movies.middlewares=movies-force-secure'
    - 'traefik.http.routers.movies.service=movies'
    - 'traefik.http.routers.movies-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.movies-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.movies-https.service=movies'
    - 'traefik.http.routers.movies-https.tls=true'
    - 'traefik.http.services.movies-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Radarr - a movies episode search tool'

# End Movies Service Section

`
}
