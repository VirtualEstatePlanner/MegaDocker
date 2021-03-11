/** @format */

//  elkServiceMite.ts
//  MegaDocker
//  Service Mite for Elk
//  Created by George Georgulas IV on 3/03/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`syncthing`]

export const syncthingServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30028,
  webInterfaceHostnames: hostnames,
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
     - 'traefik.http.routers.syncthing.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
     - 'traefik.http.middlewares.syncthing-force-secure.redirectscheme.scheme=https'
     - 'traefik.http.routers.syncthing.middlewares=syncthing-force-secure'
     - 'traefik.http.routers.syncthing.service=syncthing'
     - 'traefik.http.routers.syncthing-https.entrypoints=encryptedhttp'
     - 'traefik.http.routers.syncthing-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
     - 'traefik.http.routers.syncthing-https.service=syncthing'
     - 'traefik.http.routers.syncthing-https.tls=true'
     - 'traefik.http.services.syncthing-https.loadbalancer.server.port=8384'
     - 'com.MegaDocker.description=syncthing - syncthing filesharing for video files'
 
# End Syncthing Service Section

`,
}
