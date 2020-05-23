//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const musicServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2015,
  miteString: `

# Begin Music Service Section

 music:
  image: linuxserver/lidarr:latest
  networks:
   - music
   - traefik
  environment:
   - GUID=501
   - PUID=501
  volumes:
   - ./media/music-config:/config
   - ./media/content:/media
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.music.entrypoints=plainhttp'
    - 'traefik.http.services.music.loadbalancer.server.port=80'
    - 'traefik.http.routers.music.rule=Host("music.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.music-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.music.middlewares=music-force-secure'
    - 'traefik.http.routers.music.service=music'
    - 'traefik.http.routers.music-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.music-https.rule=Host("music.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.music-https.service=music'
    - 'traefik.http.routers.music-https.tls=true'
    - 'traefik.http.services.music-https.loadbalancer.server.port=443'
    - 'com.MegaDocker.description=Lidarr - a music episode search tool'

# End Music Service Section

`,
};
