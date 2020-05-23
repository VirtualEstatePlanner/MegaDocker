//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const comicsServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2001,
  miteString: `

# Begin Comics Service Section

 comics:
  image: linuxserver/mylar:latest
  networks:
   - comics
   - traefik
  volumes:
   - ./media/comics-config:/config
   - ./media/content:/media
  environment:
   - GUID=501
   - PUID=501
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.comics.entrypoints=plainhttp'
    - 'traefik.http.services.comics.loadbalancer.server.port=80'
    - 'traefik.http.routers.comics.rule=Host("comics.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.comics-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.comics.middlewares=comics-force-secure'
    - 'traefik.http.routers.comics.service=comics'
    - 'traefik.http.routers.comics-https.entrypoints=encryptedhttp' 
    - 'traefik.http.routers.comics-https.rule=Host("comics.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.comics-https.service=comics'
    - 'traefik.http.routers.comics-https.tls=true'
    - 'traefik.http.services.comics-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Mylar - a comics search tool'

# End Comics Service Section

`,
};
