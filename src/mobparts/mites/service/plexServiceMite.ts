//  drupalServiceMite.ts
//  MegaDocker
//  Network Mite for Drupal
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const plexServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2020,
  miteString: `

# Begin Plex Service Section

 plex:
  image: plexinc/pms-docker
  networks:
   - traefik_public
   - internal
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
   - ./plex/plex-config:/config
   - ./plex/plex-movies:/media/movies
   - ./plex/plex-music:/media/music
   - ./plex/plex-tv:/media/tv
  deploy:
   restart_policy:
    condition: on-failure
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.plex.entrypoints=plainhttp'
    - 'traefik.http.services.plex.loadbalancer.server.port=32400'
    - 'traefik.http.routers.plex.rule=Host("plex.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.plex-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.plex.middlewares=plex-force-secure'
    - 'traefik.http.routers.plex.service=plex'
    - 'traefik.http.routers.plex-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.plex-https.rule=Host("plex.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.plex-https.service=plex'
    - 'traefik.http.routers.plex-https.tls=true'
    - 'traefik.http.services.plex-https.loadbalancer.server.port=32400'
    - 'com.MegaDocker.description=Plex - media streaming server'
   placement:
    constraints:
     - node.role == manager

# End Plex Service Section

`,
};
