//  elkServiceMite.ts
//  MegaDocker
//  Service Mite for Elk
//  Created by George Georgulas IV on 3/03/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../../../interfaces/IMite';

export const syncthingServiceMite: IMite = {
  type: `DockerSwarmService`,
  miteIndex: 2028,
  miteString: `

  # Begin Syncthing Service Section

  syncthing:
   image: syncthing/syncthing:latest
   networks:
    - traefik
   environment:
    - PUID=$HOSTUSERID
    - PGID=$HOSTUSERGID
   volumes:
    - ./syncthing/data:/var/syncthing
   deploy:
    restart_policy:
     condition: on-failure
    labels:
     - 'traefik.enable=true'
     - 'traefik.http.routers.syncthing.entrypoints=plainhttp'
     - 'traefik.http.services.syncthing.loadbalancer.server.port=8384'
     - 'traefik.http.routers.syncthing.rule=Host("syncthing.[[PRIMARYDOMAIN]]")'
     - 'traefik.http.middlewares.syncthing-force-secure.redirectscheme.scheme=https'
     - 'traefik.http.routers.syncthing.middlewares=syncthing-force-secure'
     - 'traefik.http.routers.syncthing.service=syncthing'
     - 'traefik.http.routers.syncthing-https.entrypoints=encryptedhttp'
     - 'traefik.http.routers.syncthing-https.rule=Host("syncthing.[[PRIMARYDOMAIN]]")'
     - 'traefik.http.routers.syncthing-https.service=syncthing'
     - 'traefik.http.routers.syncthing-https.tls=true'
     - 'traefik.http.services.syncthing-https.loadbalancer.server.port=8384'
     - 'com.MegaDocker.description=syncthing - syncthing filesharing for video files'
 
 # End Syncthing Service Section
 

`,
};
