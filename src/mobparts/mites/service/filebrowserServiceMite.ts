/** @format */

//  emailServiceMite.ts
//  MEGADocker
//  Service Mite for email server
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ITraefikedServiceMite } from '../../../interfaces/ITraefikedServiceMite'

const hostnames: string[] = [`filebrowser`]

export const filebrowserServiceMite: ITraefikedServiceMite = {
  type: `DockerSwarmService`,
  miteIndex: 30006,
  webInterfaceHostnames: hostnames,
  miteString: `

# Begin filebrowser section

 filebrowser:
  image: filebrowser/filebrowser:v2
  volumes:
   - \${PWD}/filebrowser/data:/srv
   - \${PWD}/filebrowser/database.db:/database.db
  networks:
   - traefik
  deploy:
   replicas: 1
   restart_policy:
    condition: any
   labels:
    - 'traefik.enable=true'
    - 'traefik.http.routers.filebrowser.entrypoints=plainhttp'
    - 'traefik.http.services.filebrowser.loadbalancer.server.port=80'
    - 'traefik.http.routers.filebrowser.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.middlewares.filebrowser-force-secure.redirectscheme.scheme=https'
    - 'traefik.http.routers.filebrowser.middlewares=filebrowser-force-secure'
    - 'traefik.http.routers.filebrowser.service=filebrowser'
    - 'traefik.http.routers.filebrowser-https.entrypoints=encryptedhttp'
    - 'traefik.http.routers.filebrowser-https.rule=Host("${hostnames[0]}.[[PRIMARYDOMAIN]]")'
    - 'traefik.http.routers.filebrowser-https.service=rainloop'
    - 'traefik.http.routers.filebrowser-https.tls=true'
    - 'traefik.http.services.filebrowser-https.loadbalancer.server.port=80'
    - 'com.MegaDocker.description=Filebrowser - a web filesharing interface'
   placement:
    constraints:
     - node.role == manager

# End filebrowser Service Section

`,
}
