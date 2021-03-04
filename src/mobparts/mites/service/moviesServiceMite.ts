//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const moviesServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 30016,
  miteString: `

# Begin Movie Service Section

 movies:
  image: linuxserver/radarr:latest
  networks:
   - movies
   - traefik
  volumes:
   - ./media/movies-config:/config
   - ./media/content:/media
  environment:
   - PUID=$HOSTUSERID
   - PGID=$HOSTUSERGID
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.movies.entrypoints=plainhttp'
    - 'traefik.http.services.movies.loadbalancer.server.port=80'
    - 'traefik.http.routers.movies.rule=Host("movies.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.movies-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.movies.middlewares=movies-force-secure'
    - 'traefik.http.routers.movies.service=movies'
    - 'traefik.http.routers.movies-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.movies-https.rule=Host("movies.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.movies-https.service=movies'
    - 'traefik.http.routers.movies-https.tls=true'
    - 'traefik.http.services.movies-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Radarr - a movies episode search tool'

# End Movies Service Section

`,
};
